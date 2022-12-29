/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darker-navy": "var(--darker-navy)",
        "lighter-navy": "var(--lighter-navy)",
        "darker-purple": "var(--darker-purple)",
        "lighter-purple": "var(--lighter-purple)",
        "darker-grey": "var(--darker-grey)",
        "lighter-grey": "var(--lighter-grey)",
        paid: "var(--paid)",
        "paid-transparent": "var(--paid-transparent)",
        pending: "var(--pending)",
        "pending-transparent": "var(--pending-transparent)",
        draft: "var(--draft)",
        "draft-transparent": "var(--draft-transparent)",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
