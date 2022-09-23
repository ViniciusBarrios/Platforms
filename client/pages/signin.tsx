import type { NextPage } from "next";

import Head from "@infra/Head";

import Layout from "@layouts/SignIn";

const SignIn: NextPage = () => {
  return (
    <>
      <Head title="Entre na plataforma" />

      <Layout />
    </>
  );
};

export default SignIn;
