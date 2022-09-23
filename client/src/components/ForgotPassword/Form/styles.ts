import { styled } from "stitches";

import { Form } from "@unform/web";

export const Container = styled(Form, {});

export const ButtonWrapper = styled("div", {
  width: "100%",

  marginTop: "30px",

  display: "flex",
  justifyContent: "flex-end",
});
