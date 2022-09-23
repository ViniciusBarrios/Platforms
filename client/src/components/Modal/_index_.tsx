import React from "react";
import { IoClose } from "react-icons/io5";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import {
  StyledModalOverlay,
  StyledModalContent,
  StyledTitle,
  StyledDescription,
  CloseButton,
} from "./styles";

type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean;
};

export const Modal = ({ overlay = true, children, ...props }: ModalProps) => (
  <DialogPrimitive.Root {...props}>
    {overlay && <StyledModalOverlay />}

    {children}
  </DialogPrimitive.Root>
);

export const ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = "ModalTrigger";

type ModalContentProps = DialogPrimitive.DialogContentProps &
  React.ComponentProps<typeof StyledModalContent> & {
    width?: number;
    maintainDimentions?: boolean;
  };

export const ModalContent = ({
  width = 760,
  maintainDimentions = false,
  children,
  ...props
}: ModalContentProps) => (
  <StyledModalContent
    {...props}
    css={{
      ...props.css,

      $$maxWidth: `${width}px`,

      ...(!maintainDimentions && {
        [`@media (max-width: ${width}px)`]: {
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh",

          borderRadius: 0,
        },
      }),
    }}
  >
    {children}
  </StyledModalContent>
);

export const ModalTitle = StyledTitle;
ModalTitle.displayName = "ModalTitle";

export const ModalDescription = StyledDescription;
ModalDescription.displayName = "ModalDescription";

export const ModalClose = DialogPrimitive.Close;
ModalClose.displayName = "ModalClose";

type ModalCloseButtonProps = React.ComponentProps<typeof CloseButton> & {};

export const ModalCloseButton = ({ ...props }: ModalCloseButtonProps) => (
  <CloseButton {...props} type="button">
    <IoClose style={{ fontSize: "19px" }} />
  </CloseButton>
);
