const windmill = require("@windmill/react-ui/config");
module.exports = windmill({
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
