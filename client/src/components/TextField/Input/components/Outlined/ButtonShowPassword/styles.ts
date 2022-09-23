import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { styled, css } from "stitches";

export const Container = styled("button", {
  width: "35px",
  height: "35px",

  borderRadius: "$full",

  position: "absolute",
  top: "50%",
  right: "10px",

  transform: "translateY(-50%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "$textField-eyes-password",
});

const EyesCSS = css({
  fontSize: "23px",
});

export const EyeOpen = styled(BsEyeFill, EyesCSS);

export const EyeClose = styled(BsEyeSlashFill, EyesCSS);
