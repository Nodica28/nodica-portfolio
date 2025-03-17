# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

-   Responsive design that works on all devices
-   Dark mode support
-   Modern UI with smooth animations
-   SEO optimized
-   Fast performance
-   Contact form

## Sections

-   Hero section with call-to-action buttons
-   About Me section to showcase your background and skills
-   Skills section with progress bars
-   Projects section to showcase your work
-   Contact section with a working form

## Technologies Used

-   [Next.js](https://nextjs.org/) - React framework for production
-   [TypeScript](https://www.typescriptlang.org/) - Static type checking
-   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
-   [React](https://reactjs.org/) - JavaScript library for building user interfaces

## Getting Started

### Prerequisites

-   Node.js 18.17 or later
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

-   `src/components/sections/Hero.tsx` - Update your name and headline
-   `src/components/sections/About.tsx` - Update your bio and personal details
-   `src/components/sections/Skills.tsx` - Update your skills and proficiency levels
-   `src/components/sections/Projects.tsx` - Add your own projects
-   `src/components/sections/Contact.tsx` - Update your contact information
-   `src/components/layout/Footer.tsx` - Update copyright information and social links

### Images

Replace the placeholder images with your own:

1. Add your images to the `public` directory
2. Update the image paths in the components

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

## Deployment

This portfolio can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [React Documentation](https://reactjs.org/docs/getting-started.html)
