import React from "react";

import { Container, Logo } from "./styles";

type LogoProps = React.ComponentProps<typeof Logo> & {};

export default ({ ...props }: LogoProps) => {
  return (
    <Container to="/" title="Platforms">
      <Logo {...props} />
    </Container>
  );
};
