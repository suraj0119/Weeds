/**
 * Application-wide constants for consistent theming and styling
 */

// Color palette
export const COLORS = {
  primary: {
    blue: "#3C3B6E",
    red: "#B22234",
  },
  overlay: {
    blue: "rgba(60, 59, 110, 0.8)",
    red: "rgba(178, 34, 52, 0.8)",
    blueLight: "rgba(60, 59, 110, 0.6)",
    redLight: "rgba(178, 34, 52, 0.6)",
    blueFaint: "rgba(60, 59, 110, 0.3)",
    redFaint: "rgba(178, 34, 52, 0.3)",
    dark: "rgba(0, 0, 0, 0.3)",
  },
  text: {
    primary: "text-[#3C3B6E]",
    secondary: "text-[#B22234]",
    white: "text-white",
    gray: "text-gray-600",
    darkGray: "text-gray-700",
  },
  bg: {
    primary: "bg-[#3C3B6E]",
    secondary: "bg-[#B22234]",
    primaryLight: "bg-[#3C3B6E]/5",
    secondaryLight: "bg-[#B22234]/5",
    white: "bg-white",
    gray: "bg-gray-50",
  },
  border: {
    primary: "border-[#3C3B6E]",
    secondary: "border-[#B22234]",
    gray: "border-gray-100",
    grayMedium: "border-gray-200",
  },
}

// Gradient definitions
export const GRADIENTS = {
  primary: "bg-gradient-to-r from-[#3C3B6E] to-[#B22234]",
  primaryOverlay: "bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80",
  primaryLight: "bg-gradient-to-r from-[#3C3B6E]/60 to-[#B22234]/60",
  toBottom: "bg-gradient-to-t from-[#3C3B6E]/80 to-transparent",
  toBottomRed: "bg-gradient-to-t from-[#B22234]/80 to-transparent",
}

// Button styles
export const BUTTON_STYLES = {
  primary: `${COLORS.bg.primary} hover:bg-[#3C3B6E]/90 ${COLORS.text.white} font-cta rounded-full shadow-md hover:shadow-lg transition-all duration-300`,
  secondary: `${COLORS.bg.secondary} hover:bg-[#B22234]/90 ${COLORS.text.white} font-cta rounded-full shadow-md hover:shadow-lg transition-all duration-300`,
  outlinePrimary: `border ${COLORS.border.primary} ${COLORS.text.primary} hover:${COLORS.bg.primary} hover:text-white`,
  outlineSecondary: `border ${COLORS.border.secondary} ${COLORS.text.secondary} hover:${COLORS.bg.secondary} hover:text-white`,
  white:
    "bg-white text-[#3C3B6E] hover:bg-gray-100 font-cta rounded-full shadow-md hover:shadow-lg transition-all duration-300",
  transparent:
    "bg-transparent border border-white hover:bg-white/10 text-white font-cta rounded-full shadow-md hover:shadow-lg transition-all duration-300",
}

// Animation durations
export const ANIMATION = {
  fast: "duration-200",
  medium: "duration-300",
  slow: "duration-500",
}

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

// Common spacing
export const SPACING = {
  section: "py-12 md:py-16",
  container: "container mx-auto px-4",
  gap: "gap-4 md:gap-6 lg:gap-8",
}

// Image quality settings
export const IMAGE_QUALITY = {
  high: 90,
  medium: 80,
  low: 70,
}

// Program data
export const PROGRAMS = {
  women: [
    {
      id: "shg",
      title: "Self-Help Group Bank Linkage Programme",
      image: "/women-development-shg.jpg",
      description:
        "Facilitating the social and economic empowerment of women by supporting Self-Help Groups (SHGs) in Kanchipuram, Tiruvallur, Chengalpettu, and Chennai.",
      stats: [
        { label: "Active women SHG's", value: "1,285" },
        { label: "Beneficiaries", value: "16,705 women" },
      ],
      color: COLORS.text.primary,
      bgColor: COLORS.bg.primaryLight,
    },
    {
      id: "posh",
      title: "Prevention of Sexual Harassment (PoSH) Training",
      image: "/women-development-posh.jpg",
      description:
        "Providing training on the Prevention of Sexual Harassment of Women at Workplace Act, 2013, to ensure a secure and enabling environment for women employees.",
      stats: [
        { label: "Partnering companies", value: "90+" },
        { label: "Employees trained", value: "15,000+" },
      ],
      color: COLORS.text.secondary,
      bgColor: COLORS.bg.secondaryLight,
    },
    // Additional programs would be added here
  ],
  children: [
    {
      id: "scholarship",
      title: "Educating Students from Low-Income Families through Scholarship",
      image: "/children-programs/scholarship-program.jpeg",
      description:
        "WEEDS provides educational scholarships to children from low-income families, aiming to alleviate financial barriers and promote consistent school attendance.",
      stats: [{ label: "Scholarships provided", value: "300+" }],
      color: COLORS.text.secondary,
      bgColor: COLORS.bg.secondaryLight,
    },
    {
      id: "computer-literacy",
      title: "Rural Students Computer Literacy and Life Skill Training Programme",
      image: "/children-programs/computer-literacy.jpeg",
      description:
        "To bridge the digital divide, WEEDS offers computer literacy and life skills training to rural students.",
      stats: [{ label: "Students trained", value: "1,500+" }],
      color: COLORS.text.primary,
      bgColor: COLORS.bg.primaryLight,
    },
    {
      id: "udhayam",
      title: "Udhayam Project",
      image: "/children-programs/udhayam-classroom-teaching.jpeg",
      description:
        "The Udhayam Project focuses on uplifting underprivileged children by providing comprehensive support, including educational materials and counseling services.",
      stats: [{ label: "Children supported", value: "500+" }],
      color: COLORS.text.secondary,
      bgColor: COLORS.bg.secondaryLight,
    },
    // Additional programs would be added here
  ],
}
