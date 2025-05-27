"use client"

import type React from "react"

import { useState, useRef, useEffect, memo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavigationBar({ currentPage = "" }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false)
  const [isMobileWorkExpanded, setIsMobileWorkExpanded] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWorkDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const workPrograms = [
    { name: "Women's Development", path: "/our-work?tab=women", color: "#3C3B6E" },
    { name: "Children's Education", path: "/our-work?tab=children", color: "#B22234" },
    { name: "Health Development", path: "/our-work?tab=health", color: "#3C3B6E" },
    { name: "Community Development", path: "/our-work?tab=community", color: "#B22234" },
  ]

  // Memoized navigation link component
  const NavLink = memo(
    ({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) => (
      <Link
        href={href}
        className={`text-sm font-medium transition-colors hover:text-[#B22234] ${isActive ? "text-[#B22234]" : ""}`}
      >
        {children}
      </Link>
    ),
  )
  NavLink.displayName = "NavLink"

  const handleWorkProgramClick = useCallback(
    (e, path) => {
      e.preventDefault()

      // If already on the our-work page, just update the URL and close the dropdown
      if (pathname === "/our-work") {
        const tabParam = new URLSearchParams(path.split("?")[1]).get("tab")
        if (tabParam) {
          const url = new URL(window.location.href)
          url.searchParams.set("tab", tabParam)
          window.history.pushState({}, "", url.toString())

          // Trigger tab change by dispatching a custom event
          window.dispatchEvent(new CustomEvent("tabChange", { detail: { tab: tabParam } }))

          // Scroll to the tab content
          setTimeout(() => {
            const tabContent = document.getElementById(`tab-${tabParam}`)
            if (tabContent) {
              tabContent.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }, 100)
        }
      } else {
        // Navigate to the our-work page with the tab parameter
        router.push(path)
      }

      // Close the dropdown
      setIsWorkDropdownOpen(false)
      setIsMobileWorkExpanded(false)
      setIsMenuOpen(false)
    },
    [pathname, router],
  )

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white shadow-md">
      <div className="container flex h-32 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="bg-white p-1 rounded-md">
            <Image
              src="/logo-new.png"
              alt="WEEDS Logo"
              width={200}
              height={60}
              className="h-[80px] w-[200px] object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center">
          <nav className="flex gap-6 items-center z-10 mr-6">
            <NavLink href="/" isActive={currentPage === "home"}>
              Home
            </NavLink>
            <NavLink href="/about" isActive={currentPage === "about"}>
              About Us
            </NavLink>

            {/* Our Work with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#B22234] ${
                  currentPage === "our-work" ? "text-[#B22234]" : ""
                }`}
                aria-expanded={isWorkDropdownOpen}
                aria-haspopup="true"
              >
                Our Work
                {isWorkDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {isWorkDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <a
                    href="/our-work"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push("/our-work")
                      setIsWorkDropdownOpen(false)
                    }}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-800"
                  >
                    Overview
                  </a>
                  <div className="h-px bg-gray-200 my-1"></div>
                  {workPrograms.map((program, index) => (
                    <a
                      key={index}
                      href={program.path}
                      onClick={(e) => handleWorkProgramClick(e, program.path)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <span className="font-medium" style={{ color: program.color }}>
                        {program.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/get-involved" isActive={currentPage === "get-involved"}>
              Get Involved
            </NavLink>

            <NavLink href="/impact" isActive={currentPage === "impact"}>
              Impact
            </NavLink>
            <NavLink href="/contact" isActive={currentPage === "contact"}>
              Contact Us
            </NavLink>
          </nav>

          <Button asChild className="bg-[#B22234] hover:bg-[#B22234]/90 text-white font-cta rounded-full">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button asChild className="bg-[#B22234] hover:bg-[#B22234]/90 text-white font-cta rounded-full mr-2">
            <Link href="/donate">Donate</Link>
          </Button>

          <Button variant="ghost" size="icon" className="z-10" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container flex h-32 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-white p-1 rounded-md">
                  <Image
                    src="/logo-new.png"
                    alt="WEEDS Logo"
                    width={200}
                    height={80}
                    className="h-[80px] w-[200px] object-contain"
                  />
                </div>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 p-6">
              <Link
                href="/"
                className={`text-lg font-medium hover:text-[#B22234] transition-colors ${currentPage === "home" ? "text-[#B22234]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium hover:text-[#B22234] transition-colors ${currentPage === "about" ? "text-[#B22234]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Our Work with expandable submenu */}
              <div>
                <button
                  onClick={() => setIsMobileWorkExpanded(!isMobileWorkExpanded)}
                  className={`flex items-center justify-between w-full text-lg font-medium hover:text-[#B22234] transition-colors ${
                    currentPage === "our-work" ? "text-[#B22234]" : ""
                  }`}
                  aria-expanded={isMobileWorkExpanded}
                >
                  Our Work
                  {isMobileWorkExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                {isMobileWorkExpanded && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                    <a
                      href="/our-work"
                      onClick={(e) => {
                        e.preventDefault()
                        router.push("/our-work")
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-base font-medium text-gray-800 hover:text-[#B22234]"
                    >
                      Overview
                    </a>
                    {workPrograms.map((program, index) => (
                      <a
                        key={index}
                        href={program.path}
                        onClick={(e) => handleWorkProgramClick(e, program.path)}
                        className="block py-2 text-base hover:text-[#B22234]"
                      >
                        <span className="font-medium" style={{ color: program.color }}>
                          {program.name}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/get-involved"
                className={`text-lg font-medium hover:text-[#B22234] transition-colors ${currentPage === "get-involved" ? "text-[#B22234]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>

              <Link
                href="/impact"
                className={`text-lg font-medium hover:text-[#B22234] transition-colors ${currentPage === "impact" ? "text-[#B22234]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium hover:text-[#B22234] transition-colors ${currentPage === "contact" ? "text-[#B22234]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button asChild className="w-full bg-[#B22234] hover:bg-[#B22234]/90 text-white font-cta rounded-full">
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  Donate
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
