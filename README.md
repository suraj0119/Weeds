# WEEDS - Women's Education and Economic Development Society

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
