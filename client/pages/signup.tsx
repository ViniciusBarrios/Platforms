import type { NextPage } from "next";

import Head from "@infra/Head";

import Layout from "@layouts/Signup";

type PageProps = {
  formType: "company" | "person";
};

const Signup: NextPage<PageProps> = ({ formType }) => {
  return (
    <>
      <Head title="Entre ou cadastre-se" />

      <Layout formType={formType} />
    </>
  );
};

Signup.getInitialProps = async ctx => {
  const { type } = ctx.query;

  let formType: "company" | "person";

  if (type === "company") {
    formType = "company";
  } else {
    formType = "person";
  }

  return { formType };
};

export default Signup;
