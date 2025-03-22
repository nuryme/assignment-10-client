/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E11D48",
        secondaryColor: "#F97316",
        accent: "#FACC15",
        bodyText: "#1F2937",
      },
      backgroundColor: {
        primaryColor: "#E11D48",
        secondaryColor: "#F97316",
        accent: "#FACC15",
        backgroundColor: "#F3F4F6",
      },
      fontFamily: {
        headingFont: 'Montserrat',
        bodyFont: 'Lora',
        buttonFont: 'Nunito'
      }
    },
  },
  plugins: [require("daisyui")],
};
