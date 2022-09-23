import { styled } from "stitches";

import * as LabelPrimitive from "@radix-ui/react-label";

import InputPrimitive from "@infra/Form/Input";

export const Container = styled("div", {});

export const Wrapper = styled("div", {
  position: "relative",
});

const labelActive = {
  top: 0,

  fontSize: "14px",
};

export const Input = styled(InputPrimitive, {
  width: "100%",
  height: "100%",

  position: "absolute",
  top: 0,
  left: 0,

  borderRadius: "$sm",

  fontSize: "16px",
  fontWeight: 500,

  color: "$textField-color",

  border: "2px solid $textField-border-default",

  "&::-webkit-input-placeholder": {
    opacity: 0,
    color: "$textField-color",
    fontSize: "15px",
    transition: "200ms",
  },

  "&:-moz-placeholder": {
    opacity: 0,
    color: "$textField-color",
    fontSize: "15px",
    transition: "200ms",
  },

  "&:focus + #label": {
    ...labelActive,
    color: "$textField-label-active",
  },

  "&:not(:placeholder-shown):not(:focus) + #label": labelActive,

  "&:focus": {
    borderColor: "$textField-border-active",

    "&::-webkit-input-placeholder": { opacity: 0.8 },

    "&:-moz-placeholder": { opacity: 0.8 },
  },
});

export const Label = styled(LabelPrimitive.Root, {
  position: "absolute",
  top: "50%",
  left: "12px",

  background: "$form-background",

  padding: "0 5px",

  borderRadius: "$sm",

  fontSize: "16px",
  fontWeight: 600,

  transform: "translateY(-50%)",

  pointerEvents: "none",
  userSelect: "none",

  transition: "200ms",
});

export const Helper = styled("div", {
  margin: "5px 0 0 10px",

  fontSize: "14px",
  fontWeight: 600,
});
