import { FiEdit } from "react-icons/fi";

import { styled } from "stitches";

export const Container = styled("div", {
  flexShrink: 0,

  "-webkit-user-select": "none !important" /* Safari */,
  "-ms-user-select": "none !important" /* IE 10 and IE 11 */,
  "user-select": "none !important" /* Standard syntax */,

  position: "relative",

  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "$full",
    "-webkit-mask":
      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    "-webkit-mask-composite": "destination-out",
    maskComposite: "exclude",
  },

  variants: {
    theme: {
      default: {
        "&::before": {
          background: "linear-gradient($avatar-default-gradient) border-box",
        },

        "#avatar": {
          color: "$white",
          linearGradient: "$avatar-default-gradient",
        },
      },
    },
  },
});

export const Avatar = styled("div", {
  width: "100%",
  height: "100%",

  borderRadius: "$full",

  position: "relative",

  textTransform: "uppercase",
});

export const AvatarImg = styled("img", {
  width: "100%",
  height: "100%",

  borderRadius: "$full",

  objectFit: "cover",

  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 2,
});

export const Letter = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  zIndex: 1,
});
