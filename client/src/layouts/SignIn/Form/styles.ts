import { styled } from "stitches";

import { Form } from "@unform/web";

export const Container = styled("main", {
  width: "100%",
  maxWidth: "480px",

  background: "$form-background",
  boxShadow: "$form",

  borderRadius: "$sm",

  "@480-min": {
    padding: "65px",
  },

  "@480-max": {
    padding: "50px 35px",
  },
});

export const Wrapper = styled(Form, {});
