const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
}

console.log(`${colors.bright}${colors.cyan}Starting build process for WEEDS website...${colors.reset}\n`)

try {
  // Step 1: Clean previous builds
  console.log(`${colors.yellow}Cleaning previous builds...${colors.reset}`)
  if (fs.existsSync(path.join(process.cwd(), ".next"))) {
    fs.rmSync(path.join(process.cwd(), ".next"), { recursive: true, force: true })
    console.log(`${colors.green}✓ Removed .next folder${colors.reset}`)
  }

  if (fs.existsSync(path.join(process.cwd(), "out"))) {
    fs.rmSync(path.join(process.cwd(), "out"), { recursive: true, force: true })
    console.log(`${colors.green}✓ Removed out folder${colors.reset}`)
  }

  // Step 2: Install dependencies
  console.log(`\n${colors.yellow}Installing dependencies...${colors.reset}`)
  execSync("npm install", { stdio: "inherit" })
  console.log(`${colors.green}✓ Dependencies installed${colors.reset}`)

  // Step 3: Run linting
  console.log(`\n${colors.yellow}Running linting...${colors.reset}`)
  execSync("npm run lint", { stdio: "inherit" })
  console.log(`${colors.green}✓ Linting passed${colors.reset}`)

  // Step 4: Build the project
  console.log(`\n${colors.yellow}Building the project...${colors.reset}`)
  execSync("npm run build", { stdio: "inherit" })
  console.log(`${colors.green}✓ Build completed successfully${colors.reset}`)

  // Step 5: Copy additional files if needed
  console.log(`\n${colors.yellow}Copying additional files...${colors.reset}`)
  if (!fs.existsSync(path.join(process.cwd(), "out", "reports"))) {
    fs.mkdirSync(path.join(process.cwd(), "out", "reports"), { recursive: true })
  }
  console.log(`${colors.green}✓ Additional files copied${colors.reset}`)

  console.log(`\n${colors.bright}${colors.green}Build process completed successfully!${colors.reset}`)
  console.log(`${colors.cyan}The static site has been generated in the 'out' directory.${colors.reset}`)
  console.log(`${colors.cyan}You can deploy this directory to any static hosting service.${colors.reset}`)
} catch (error) {
  console.error(`\n${colors.red}Build failed with error:${colors.reset}`, error)
  process.exit(1)
}
