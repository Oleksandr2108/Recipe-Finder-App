# 🥘 Recipe Finder App

A modern and stylish recipe search application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, using the **Spoonacular API** to fetch recipes based on user queries, cuisine types, and preparation time.

## ✨ Features

- 🔍 Search recipes by keyword (e.g., "pasta", "chicken")
- 🌍 Filter by cuisine (e.g., Italian, Mexican, Asian)
- ⏱ Filter by maximum ready time
- 📄 Recipe detail page with ingredients and cooking information
- ⚡ Server-side fetching with caching and revalidation
- 🧭 Clean UI with responsive design
- 🎯 Custom components: inputs, select dropdowns
- 💡 Loading states with `React.Suspense`

## 🧪 Technologies Used

- [Next.js 15 (App Router)](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Spoonacular API](https://spoonacular.com/food-api)
- React Suspense
- Custom reusable UI components

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Oleksandr2108/Recipe-Finder-App.git
cd Recipe-Finder-App
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
