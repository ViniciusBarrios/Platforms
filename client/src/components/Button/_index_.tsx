import React from "react";
import { CircleSpinner } from "react-spinners-kit";

import { useRouter } from "next/router";

import { Container } from "./styles";

type ButtonProps = React.ComponentProps<typeof Container> & {
  to?: string;
  loading?: boolean;
};

export default ({
  to,
  loading,
  disabled = loading,
  children,
  ...props
}: ButtonProps) => {
  const router = useRouter();

  return (
    <Container
      {...props}
      css={{
        opacity: disabled ? 0.85 : 1,
        pointerEvents: disabled ? "none" : "initial",
        ...props.css,
      }}
      onClick={e => {
        to && router.push(to);

        props.onClick && props.onClick(e);
      }}
    >
      {!loading ? (
        children
      ) : (
        <CircleSpinner size={18} color="#ffffff" loading={loading} />
      )}
    </Container>
  );
};
