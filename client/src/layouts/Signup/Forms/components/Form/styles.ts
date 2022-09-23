import { styled } from "stitches";

import { Form } from "@unform/web";

import Link from "@infra/Link";

export const Container = styled(Form, {
  width: "100%",

  background: "$form-background",
  boxShadow: "$form",

  borderRadius: "$sm",

  "@480-max": {
    padding: "50px 35px",
  },

  "@480-min": {
    padding: "65px",
  },
});

const linksCSS = {
  fontWeight: 600,
  fontSize: "13px",

  marginTop: "30px",

  textAlign: "center",
};

export const HaveCompany = styled("div", linksCSS);

export const CreateAccont = styled(Link, {
  marginTop: "5px",

  fontWeight: 600,

  color: "$primary-300",
});

export const NotHaveCompany = styled("div", linksCSS);
