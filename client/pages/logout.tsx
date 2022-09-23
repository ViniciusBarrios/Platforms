import type { NextPage } from "next";

import Head from "@infra/Head";

import Layout from "@layouts/Logout";

const Logout: NextPage = () => {
  return (
    <>
      <Head title="Ah, não! Você está indo embora... Tem certeza?" />

      <Layout />
    </>
  );
};

export default Logout;
