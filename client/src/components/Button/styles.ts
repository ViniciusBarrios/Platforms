import { styled } from "stitches";

export const Container = styled("button", {
  width: "100%",
  height: "50px",
  borderRadius: "$sm",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  linearGradient: "$background-gradient",
  color: "$white",

  textTransform: "none",

  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: 0.6,

  transition: "200ms",

  "&:focus": {
    opacity: "0.9",
  },
});
