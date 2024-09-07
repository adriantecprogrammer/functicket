//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 7%, rgba(175,63,127,1) 89%)",
        "gradiente-div-evento":
          "background: rgb(0,0,0) linear-gradient(90deg, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 92%, rgba(175,63,127,1) 100%)",
        "new-gradiente":
          "background: rgb(115,93,120) linear-gradient(0deg, rgba(115,93,120,1) 11%, rgba(0,0,0,1) 47%)",
      },
    },
  },
  plugins: [],
};
