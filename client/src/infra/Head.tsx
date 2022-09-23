import React from "react";

import NextHead from "next/head";

type HeadProps = React.ComponentProps<any> & {
  title: string;
};

export default ({ title, children }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>

      {children}
    </NextHead>
  );
};
