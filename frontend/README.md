# Geek Audiophile

A modern e-commerce platform for premium audio peripherals, built with React, TypeScript, and Tailwind CSS.


## Features

- 🎧 **Product Catalog** - Browse premium headphones, earbuds, amplifiers, and audio accessories
- 🛒 **Shopping Cart** - Add products, manage quantities, and proceed to checkout
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, minimal design with smooth animations
- 🔍 **Category Filtering** - Filter products by category for easy browsing
- 👤 **User Authentication** - Login/Register interface
- 📦 **Product Details** - Comprehensive product information with specifications

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.0
- **Build Tool**: Vite
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 3. Start development server
npm run dev
```

## Project Structure

```
geek-audiophile/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Main app component with routing
│   ├── components/           # React components
│   │   ├── HomePage.tsx
│   │   ├── ProductListingPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ui/              # Reusable UI components
│   ├── data/
│   │   └── products.ts      # Product database
│   └── styles/
│       └── globals.css      # Global styles
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Product Categories

- **Headphones** - Premium over-ear and on-ear headphones
- **Earbuds** - True wireless and in-ear monitors
- **Amplifiers** - Portable and desktop amplifiers
- **DACs** - Digital-to-analog converters
- **Cables** - Premium audio cables

## Key Components

### Pages
- **HomePage** - Hero section, featured products, category cards
- **ProductListingPage** - Full product catalog with filtering
- **ProductDetailPage** - Detailed product view with specifications
- **CategoryPage** - Category-specific product listings
- **CartPage** - Shopping cart with quantity management
- **CheckoutPage** - Order summary and payment flow
- **AuthPage** - Login and registration

### UI Components
- Buttons, Inputs, Labels
- Tabs, Checkboxes, Select dropdowns
- Cards, Dialogs, Modals
- And 50+ shadcn/ui components

## Design Philosophy

- **Clean & Minimal** - Focus on content, not clutter
- **Fast & Responsive** - Optimized performance across devices
- **Professional** - Typography using Courier New for brand identity
- **User-Friendly** - Intuitive navigation and interactions

## Branding

**Logo**: GEEK AUDIOPHILE
- Font: Courier New (monospace)
- Weight: 900 (maximum)
- Letter-spacing: 0.25em
- Style: Uppercase, tech-forward aesthetic

### Code Style

- TypeScript for type safety
- Functional React components with hooks
- Tailwind CSS for styling
- ESLint for code quality

