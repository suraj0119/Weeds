"use client"

import type React from "react"

import { useState } from "react"
import { Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the structure for volunteer opportunities
interface VolunteerOpportunity {
  title: string
  description: string
}

interface OpportunityCategory {
  id: string
  label: string
  icon: React.ReactNode
  opportunities: VolunteerOpportunity[]
}

// Data for volunteer opportunities
const volunteerOpportunities: OpportunityCategory[] = [
  {
    id: "women",
    label: "For Women",
    icon: <Users className="h-4 w-4" />,
    opportunities: [
      {
        title: "Leadership Skill Training for Self-Help Group Leaders",
        description:
          "Leadership skill training for our Self-Help Group leaders is essential to enhance their ability to guide, inspire, and effectively manage group dynamics, fostering a more empowered and cohesive community.",
      },
      {
        title: "Financial Literacy Training for Self-Help Group members",
        description:
          "Providing financial literacy training to Self-Help Group members is crucial for equipping them with the knowledge and skills to empower members in making informed financial decisions and fostering economic stability within the community.",
      },
      {
        title: "Health Awareness session for Women and Self Help group members",
        description:
          "Conduct health awareness sessions covering important topics like nutrition, reproductive health, and preventive care.",
      },
      {
        title: "Entrepreneurship Training for our Tailoring Women Trainees",
        description: "Motivate the women to set up their own business and guide them on how to promote their business.",
      },
      {
        title: "Entrepreneurship Training for Aari & Embroidery Learning Women",
        description: "Motivate the women to set up their own business and guide them on how to promote their business.",
      },
      {
        title: "Environment and climate change awareness session for women",
        description:
          "Educate women about environmental issues and sustainable practices they can implement in their daily lives.",
      },
    ],
  },
  {
    id: "children",
    label: "For Children",
    icon: <GraduationCap className="h-4 w-4" />,
    opportunities: [
      {
        title: "WHO life skill session",
        description: "Teaching online (targeted students from standard 5th to 9th)",
      },
      {
        title: "Mentoring Session",
        description: "Grade 10th to 12th (career guidance)",
      },
      {
        title: "Under graduate college students Mentoring sessions",
        description: "Guiding them to build resume, mock interviews, sourcing for job etc.",
      },
      {
        title: "Financial Literacy session",
        description: "Educating the children about savings and its benefits",
      },
      {
        title: "Cybersecurity sessions for Teens/Youths",
        description: "Teaching young people about online safety and security best practices.",
      },
      {
        title: "Environment education",
        description: "Teaching children about environmental conservation and sustainability.",
      },
      {
        title: "Storytelling",
        description: "For our evening tuition centre students employees tell inspirational stories to motivate them.",
      },
      {
        title: "Letter Writing for Scholarship Students",
        description: "Motivational letters for scholarship students",
      },
      {
        title: "Safe Internet usage",
        description: "Teaching children how to navigate the internet safely and responsibly.",
      },
      {
        title: "Life Skills",
        description: "Teaching essential life skills to help children develop into well-rounded individuals.",
      },
      {
        title: "Health and Hygiene",
        description: "Educating children about personal hygiene and healthy habits.",
      },
      {
        title: "Awareness on Environment / Climate Change",
        description: "Raising awareness about environmental issues and climate change among children.",
      },
    ],
  },
]

export function VolunteerOpportunities() {
  const [activeTab, setActiveTab] = useState<string>("women")

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3">
        {volunteerOpportunities.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            variant="outline"
            className={`rounded-full px-6 ${
              activeTab === category.id
                ? "bg-[#3C3B6E] text-white hover:bg-[#3C3B6E]/90"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.icon}
            <span className="ml-2">{category.label}</span>
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
        {volunteerOpportunities.map((category) => (
          <div
            key={category.id}
            className={`space-y-4 ${activeTab === category.id ? "block animate-in fade-in" : "hidden"}`}
          >
            <p className="text-gray-600 mb-4">
              {category.id === "women"
                ? "Volunteer opportunities focused on empowering women through various skills and knowledge sharing programs. These opportunities are available both virtually and in-person."
                : "Opportunities to make a difference in children's lives through education, mentoring, and skill development. These opportunities are available both virtually and in-person."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[900px] overflow-y-auto pr-2">
              {category.opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    category.id === "women" ? "border-[#B22234] bg-[#B22234]/5" : "border-[#3C3B6E] bg-[#3C3B6E]/5"
                  }`}
                >
                  <h4 className={`font-bold ${category.id === "women" ? "text-[#B22234]" : "text-[#3C3B6E]"} mb-2`}>
                    {opportunity.title}
                  </h4>
                  <p className="text-sm text-gray-600">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
