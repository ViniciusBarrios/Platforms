import React from "react";

import { Container, EyeOpen, EyeClose } from "./styles";

type ButtonShowPasswordProps = React.ComponentProps<typeof Container> & {
  showPass: boolean;
  setShowPass(boolean: boolean): void;
};

export default ({
  showPass,
  setShowPass,
  ...props
}: ButtonShowPasswordProps) => {
  return (
    <Container type="button" onClick={() => setShowPass(!showPass)} {...props}>
      {showPass ? <EyeOpen /> : <EyeClose />}
    </Container>
  );
};
