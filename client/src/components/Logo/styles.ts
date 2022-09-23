import { styled } from "stitches";

import Link from "@infra/Link";

import { Default as DefaultLogo } from "@static/assets/logo";

export const Container = styled(Link, {});

export const Logo = styled(DefaultLogo, {
  width: "150px",
  height: "auto",
});
