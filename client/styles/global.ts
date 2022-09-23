import { globalCss } from "stitches";

export default globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    fontFamily: "$Montserrat",
  },
  li: {
    listStyle: "none",
  },
  a: {
    textDecoration: "none !important",
    display: "inline-flex",
  },
  "*, button, input, textarea": {
    border: "none",
    background: "none",
    outline: "none",
  },
  "input, textarea": {
    caretColor: "$primary-300",
  },
  button: {
    cursor: "pointer",
  },
  textarea: {
    resize: "none",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    background: "$background-color",

    overflowX: "hidden",

    textRendering: "optimizeLegibility !important",
    "-webkit-font-smoothing": "antialiased !important",

    color: "$text-color-primary",
  },
});
