import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        primaryBright: "var(--primary-bright)",
        primaryText: "var(--primary-text)",
        secondary: "var(--secondary)",
        secondaryDark: "var(--secondary-dark)",
        secondaryBright: "var(--secondary-bright)",
        secondaryText: "var(--secondary-text)",
        defaultText: "var(--default-text)",
        warning: "var(--warning)",
        success: "var(--success)",
        error: "var(--error)",
      },
    },
    aspectRatio: {
      '3/2': '3/2',
      '16/9': '16/9',
      '21/9': '21/9',
    },
  },
  plugins: [],
} satisfies Config;
