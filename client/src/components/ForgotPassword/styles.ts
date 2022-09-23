import { styled } from "stitches";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",

  marginTop: "30px",

  "> span": {
    fontWeight: 600,

    "@480-min": {
      fontSize: "13px",
    },

    "@480-max": {
      fontSize: "12px",
    },
  },
});

export const ButtonForgotPassword = styled("span", {
  fontWeight: 700,

  whiteSpace: "nowrap",

  cursor: "pointer",

  color: "$primary-300",
});
