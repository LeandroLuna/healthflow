/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(20, 148, 255)",
        secondaryColor: "rgb(71, 171, 255)",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(230, 230, 230)",
        bgDark1: "rgb(4, 22, 53)",
        bgDark2: "rgb(8, 42, 100)",
        bgDark3: "rgb(12, 62, 147)",
        bgDark3Hover: "rgb(12, 62, 147, 0.5)",
        bgDarkTransparent: "rgb(4, 22, 53, 0.7)",
        bgDarkTransparentDarker: "rgb(0, 0, 0, 0.5)",
        bgDarkTransparentLighter: "rgb(12, 62, 147, 0.7)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)"
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

