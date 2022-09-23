import { styled, keyframes } from "stitches";

const animation = keyframes({
  from: { opacity: 0, transform: "translateX(-80px)" },
  to: { opacity: 1, transform: "translateX(0px)" },
});

export const Container = styled("div", {
  minWidth: "100vw",
  minHeight: "100vh",

  display: "flex",
  justifyContent: "center",

  linearGradient: "$background-gradient",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1000px",

  overflowX: "hidden",

  "@900-min": {
    padding: "30px",
  },

  "@900-max": {
    padding: "20px",
  },
});

export const Content = styled("div", {
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",

  animation: `${animation} 300ms`,

  "@900-max": {
    justifyContent: "center",
    flexDirection: "column",
  },

  "@900-min": {
    justifyContent: "space-between",
    padding: "28px 0px 50px",
  },
});
