import { useRef, useState } from "react";

import Router from "next/router";

import { SubmitHandler, FormHandles } from "@unform/core";
import { CompanySignupData } from "forms";

import CompanySignupValidation from "@validations/Signup/Company";

import cnpjMask from "@masks/cnpj";

import TextField from "@components/TextField";

import Form from "../Form";

import { initializeApollo, gql, ApolloError } from "@libs/apollo";
import { notify } from "@libs/notify";

type CompanyDetals = CompanySignupData;

const ADD_COMPANY = gql`
  mutation AddCompany($data: CompanyDetals!) {
    addCompany(data: $data)
  }
`;

export default () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<CompanySignupData> = async (
    formData,
    { reset },
  ) => {
    setLoading(true);

    const valid = await CompanySignupValidation(formData, formRef);

    if (!valid) return setLoading(false);

    try {
      const apolloClient = initializeApollo();

      const {
        data: { addCompany: msg },
      } = await apolloClient.mutate({
        mutation: ADD_COMPANY,
        variables: { data: formData },
      });

      notify(msg, { type: "info" });

      Router.push("/signin");

      reset();
    } catch (err) {
      if (err instanceof ApolloError) notify(err.message);
    }

    setLoading(false);
  };

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      link="notHeveCompany"
      loading={loading}
    >
      <TextField
        name="cnpj"
        label="CNPJ"
        helper="Digite o cnpj correto da empresa."
        onChange={e => (e.target.value = cnpjMask(e.target.value))}
        maxLength={18}
      />

      <TextField
        name="name"
        label="Nome"
        helper="Digite o nome que seja identificado semelhança no nome contido no cnpj."
        margin="25px 0 0 0"
      />
    </Form>
  );
};
