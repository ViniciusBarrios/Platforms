import React from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { styled } from "stitches";

const Anchor = styled("a", {
  position: "relative",
});

export type LinkProps = React.ComponentProps<typeof Anchor> & {
  to?: NextLinkProps["href"];
  underline?: boolean;
};

export default ({ to = "/", underline, children, ...props }: LinkProps) => {
  return (
    <NextLink href={to} scroll={false} passHref>
      <Anchor
        css={
          underline
            ? {
                "&:hover": {
                  "&:after": {
                    width: "100%",
                  },
                },
                "&:after": {
                  content: "",

                  width: "0",
                  height: "1px",

                  opacity: 0.7,

                  background: "$primary-300",

                  position: "absolute",
                  bottom: 0,
                  top: "1rem",
                  left: 0,

                  transition: "width 200ms",
                },

                ...props.css,
              }
            : { ...props.css }
        }
        {...props}
      >
        {children}
      </Anchor>
    </NextLink>
  );
};
