/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          300: 'var(--primary-300)',

        },
        secondary: {
          100: 'var(--secondary-100)',
        },
        primarynav: {
          100: "var(--primary-nav-100)",
        },
        secondarynav: {
          100: "var(--secondary-nav-100)",
        },
        button: {
          primary: "var(--button-primary)",
          mvprimary: 'var(--mv-button-primary)',
          mvsecondary: 'var(--mv-button-secondary)',
          secondary: "var(--button-secondary)",
        },
        font: {
          color: "var(--font-color)",
          light: "var(--font-light)",
          red: "var(--font-red)",
          blue: "var(--font-blue)",
          black: "var(--font-black)",
          disabled: 'var(--font-disabled)',

        },
        accordion: {
          primary: "var(--accordion-primary)",
        },
        card: {
          100: 'var(--card-100)',
          200: 'var(--card-200)',

          overlay: 'var(--card-overlay)',

        },
        check: {
          'primary-true': 'var(--primary-check-100)',
          'primary-false': 'var(--primary-uncheck-200)',
          'secondary-true': 'var(--secondary-check-100)',
          'secondary-false': 'var(--secondary-uncheck-200)',
        },
        boxline: {
          100: 'var(--boxline-100)',
          200: 'var(--boxline-200)',
        },
        input: "var(--input)",
        border: "var(--border)",
        popupborder: "var(--popupborder)",
        disabled: 'var(--disabled)',
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      dosis: ["Dosis", "sans-serif"],
    },
    screens: {
      xs: "320px",
      s: "500px",
      sm: "576px",
      xx: "700px",
      md: "800px",
      xmd: "992px",
      lg: "1100px",
      xlg: "1140px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      sl: ["15px", "20px"],
      base: ["16px", "24px"],
      md: ["18px", "26px"],
      lg: ["20px", "28px"],
      xl: ["22px", "27px"],
      "1xl": ["24px", "29px"],
      "2xl": ["28px", "34px"],
      "3xl": ["32px", "39px"],
      "4xl": ["36px", "44px"],
    },
    borderRadius: {
      none: "0",
      sm: "13px",
      md: "22px",
      DEFAULT: "0",
      lg: "52px",
      full: "9999px",
    },
  },
  plugins: [],
}

