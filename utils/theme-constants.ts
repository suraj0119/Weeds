export const COLORS = {
  primary: {
    blue: "#3C3B6E",
    red: "#B22234",
  },
  overlay: {
    blue: "rgba(60, 59, 110, 0.6)",
    red: "rgba(178, 34, 52, 0.6)",
    blueLight: "rgba(60, 59, 110, 0.3)",
    redLight: "rgba(178, 34, 52, 0.3)",
    blueBg: "bg-[#3C3B6E]/5",
    redBg: "bg-[#B22234]/5",
  },
  text: {
    primary: "text-[#3C3B6E]",
    secondary: "text-[#B22234]",
  },
  bg: {
    primary: "bg-[#3C3B6E]",
    secondary: "bg-[#B22234]",
  },
  hover: {
    primary: "hover:bg-[#3C3B6E]/90",
    secondary: "hover:bg-[#B22234]/90",
  },
}

export const GRADIENTS = {
  primary: "bg-gradient-to-r from-[#3C3B6E] to-[#B22234]",
  overlay: "bg-gradient-to-r from-[#3C3B6E]/80 to-[#B22234]/80",
  overlayLight: "bg-gradient-to-r from-[#3C3B6E]/60 to-[#B22234]/60",
}

export const BUTTON_STYLES = {
  primary: `bg-[${COLORS.primary.red}] hover:bg-[${COLORS.primary.red}]/90 text-white font-cta rounded-full`,
  secondary: `bg-[${COLORS.primary.blue}] hover:bg-[${COLORS.primary.blue}]/90 text-white font-cta rounded-full`,
  outline: "bg-transparent border border-white hover:bg-white/10 text-white font-cta rounded-full",
  white: "bg-white text-[#3C3B6E] hover:bg-gray-100 font-cta rounded-full",
}
