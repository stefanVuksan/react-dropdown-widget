/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    screens: {
        xs: "320px",
        sm: "540px",
        md: "920px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
        addComponents({ 
            ".container": {
                maxWidth: "100%",
                // "@screen sm": {
                //   maxWidth: "460px",
                // },
                "@screen md": {
                  maxWidth: "800px",
                },
                "@screen lg": {
                  maxWidth: "900px",
                },
                "@screen xl": {
                  maxWidth: "1300px",
                },
              },
        })}
   
  ],
}
