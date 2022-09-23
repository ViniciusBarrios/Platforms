import { styled } from "stitches";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "480px",

  background: "$form-background",
  boxShadow: "$form",

  borderRadius: "$sm",

  display: "flex",
  justifyContent: "center",

  "@900-min": {
    padding: "15px",
  },

  "@900-max": {
    padding: "10px",
    marginTop: "30px",
  },
});
