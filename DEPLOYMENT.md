# Deployment Guide for WEEDS Website

This guide provides instructions for building and deploying the WEEDS website.

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Building the Project

1. Clone the repository:
   \`\`\`
   git clone <repository-url>
   cd weeds-homepage
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Build the project:
   \`\`\`
   npm run build
   \`\`\`

   This will create a `.next` directory with the compiled application.

4. For a static export (optional):
   \`\`\`
   npm run export
   \`\`\`

   This will create an `out` directory with static HTML files that can be deployed to any static hosting service.

   Alternatively, you can use our build script which handles cleaning, building, and preparing for deployment:
   \`\`\`
   node scripts/build.js
   \`\`\`

## Deployment Options

### Option 1: Static Hosting (Recommended)

The static export (in the `out` directory) can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Amazon S3
- Google Cloud Storage

Simply upload the contents of the `out` directory to your hosting provider.

### Option 2: Node.js Server

If you prefer to run the application on a Node.js server:

1. Build the application:
   \`\`\`
   npm run build
   \`\`\`

2. Start the production server:
   \`\`\`
   npm start
   \`\`\`

## Environment Variables

If your deployment requires environment variables, create a `.env.local` file in the root directory with the following variables:

\`\`\`
NEXT_PUBLIC_SITE_URL=https://your-domain.com
\`\`\`

## Troubleshooting

If you encounter any issues during deployment:

1. Ensure all dependencies are installed: `npm install`
2. Clear the cache and rebuild: `rm -rf .next out && npm run build`
3. Check for any console errors during the build process

For further assistance, please contact the development team.
\`\`\`

Let's also update the README.md with build instructions:

```typescriptreact file="README.md"
[v0-no-op-code-block-prefix]# WEEDS - Women's Education and Economic Development Society

This is the official website for the Women's Education and Economic Development Society (WEEDS), a non-profit organization dedicated to empowering women and fostering community development in Tamil Nadu, India.

## Building for Production

To prepare the project for production deployment:

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Build the project:
   \`\`\`
   npm run build
   \`\`\`

3. For a static export (creates a distributable folder):
   \`\`\`
   npm run export
   \`\`\`
   
   This will create an `out` directory with all static files ready for deployment.

4. Alternatively, use our build script:
   \`\`\`
   node scripts/build.js
   \`\`\`

For more detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Project Structure

The project follows a modular architecture with the following key directories:

- `app/`: Next.js app router pages
- `components/`: Reusable UI components
  - `ui/`: Shared UI components
  - `layout/`: Layout components
- `hooks/`: Custom React hooks
- `utils/`: Utility functions and constants
- `public/`: Static assets

## Key Features

- Responsive design for all device sizes
- Optimized image loading and rendering
- Comprehensive error handling
- Performance monitoring
- Accessibility considerations

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Code Organization

- **Components**: Follow a modular approach with each component in its own file
- **Constants**: Centralized in `utils/constants.ts`
- **Styling**: Uses Tailwind CSS with consistent color schemes
- **Error Handling**: Implemented with ErrorBoundary and logging
- **Performance**: Monitored with custom performance utilities

### Best Practices

- Use TypeScript for type safety
- Follow consistent naming conventions
- Document components and functions with JSDoc comments
- Implement proper error handling
- Optimize for performance
- Write maintainable and reusable code

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request

## License

All rights reserved. This codebase is proprietary and confidential.
