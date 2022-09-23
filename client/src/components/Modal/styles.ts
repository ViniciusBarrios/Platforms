import { styled, keyframes } from "stitches";

import * as DialogPrimitive from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const overlayHide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(-50%, calc(-50% + 20px), 0) scale(.96)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(-50%, -50%, 0) scale(1)",
  },
});

const contentHide = keyframes({
  from: {
    opacity: 1,
    transform: "translate3d(-50%, -50%, 0) scale(1)",
  },
  to: {
    opacity: 0,
    transform: "translate3d(-50%, calc(-50% + 20px), 0) scale(.96)",
  },
});

export const StyledModalOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$overlay-background",

  position: "fixed",
  inset: 0,

  zIndex: "$overlay",

  "&[data-state=open]": {
    animation: `${overlayShow} 0.3ms ease-in forwards`,
  },

  "&[data-state=closed]": {
    animation: `${overlayHide} 0.1s ease-in forwards`,
  },
});

export const StyledModalContent = styled(DialogPrimitive.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",

  overflowY: "auto",

  backfaceVisibility: "hidden",

  transform: "translate3d(-50%, -50%, 0px)",

  width: "95vw",
  maxWidth: "$$maxWidth",
  maxHeight: "80vh",

  background: "$modal-background",

  zIndex: "$modal",

  borderRadius: "$sm",

  "&:focus": {
    outline: "none",
  },

  "&[data-state=open]": {
    animation: `${contentShow} 0.3s ease-out forwards`,
  },

  "&[data-state=closed]": {
    animation: `${contentHide} 0.2s ease-out forwards`,
  },

  boxShadow: `
    0px 1.8px 26px rgba(0, 0, 0, 0.038),
    0px 5px 7.1px rgba(0, 0, 0, 0.057),
    0px 12.1px 17.2px rgba(0, 0, 0, 0.077),
    0px 48px 57px rgba(0, 0, 0, 0.012)
  `,
});

export const StyledTitle = styled(DialogPrimitive.Title, {
  fontSize: 20,
  fontWeight: 600,

  color: "$modal-title",
});

export const StyledDescription = styled(DialogPrimitive.Description, {
  fontSize: 12,
  fontWeight: 600,

  margin: "5px 0px 10px 0",

  color: "$modal-description",
});

export const CloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: 10,
  right: 10,

  padding: "4px",

  borderRadius: "$full",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  color: "$primary-400",

  "&:hover": {
    background: "$primary-50",
  },

  "&:focus": {
    boxShadow: "$focus",
  },

  transition: "100ms",
});
