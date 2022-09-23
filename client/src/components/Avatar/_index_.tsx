import React from "react";

import { Property } from "@stitches/react/types/css";

import { Container, Avatar, AvatarImg, Letter } from "./styles";

type AvatarProps = React.ComponentProps<typeof Container> & {
  name?: string;
  size?: number;
  fontSize?: Property.FontSize;
  fontWeight?: Property.FontWeight;
  borderWidth?: string;
  paddingBorder?: string;
  avatar?: string;
};

export default ({
  name = "Animal Buy",
  size = 55,
  fontSize = "18px",
  fontWeight = 600,
  borderWidth = "4px",
  paddingBorder = "8px",
  avatar,
  theme = "default",
  ...props
}: AvatarProps) => {
  return (
    <Container
      {...props}
      theme={theme}
      css={{
        size: size,
        padding: paddingBorder,
        "&::before": {
          border: `${borderWidth} solid transparent`,
        },
        ...props.css,
      }}
    >
      <Avatar css={{ fontSize, fontWeight }} id="avatar">
        {avatar && <AvatarImg alt={name} src={avatar} />}

        <Letter>{name[0]}</Letter>
      </Avatar>
    </Container>
  );
};
