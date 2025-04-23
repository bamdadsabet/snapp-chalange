# Snapp E-commerce Project

This is a modern e-commerce application built with Next.js, featuring different rendering strategies for optimal performance and user experience.

## Project Structure

```
snapp/
├── src/                    # Source directory
│   ├── app/               # Next.js 13+ app directory
│   │   ├── api/          # API routes
│   │   ├── cart/         # Cart page
│   │   ├── products/     # Products pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.scss  # Global styles
│   ├── components/       # Reusable React components
│   ├── services/         # API and service functions
│   ├── composables/      # Vue-style composables
│   ├── assets/          # Static assets
│   ├── types.d.ts       # TypeScript type definitions
│   └── middleware.ts    # Next.js middleware
├── public/               # Public static assets
├── .next/               # Next.js build output
├── node_modules/        # Dependencies
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
└── README.md           # Project documentation
```

## Rendering Strategies

The application utilizes different rendering strategies for different pages to optimize performance and user experience:

### Cart Page (`/cart`)

- **Client-side Rendering (CSR)**
  - The cart page is fully client-side rendered
  - This allows for dynamic updates of cart items without page refreshes
  - Provides immediate feedback for user interactions

### Products Listing Page (`/products`)

- **Hybrid Rendering**
  - Static page shell with metadata
  - Product list is client-side rendered
  - This approach allows for:
    - Fast initial page load
    - SEO-friendly metadata
    - Dynamic product filtering and sorting
    - Real-time inventory updates

### Product Detail Page (`/products/[id]`)

- **Incremental Static Regeneration (ISR)**
  - Product metadata is pre-rendered at build time
  - Pages are regenerated in the background at specified intervals
  - Product details are fetched client-side
  - Benefits:
    - Fast page loads
    - SEO optimization
    - Reduced server load
    - Always up-to-date content

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run start` - Runs the production build
- `npm run lint` - Runs ESLint for code quality
