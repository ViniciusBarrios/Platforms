import { useRef, useState } from "react";

import Router from "next/router";

import { SubmitHandler, FormHandles } from "@unform/core";
import { PersonSignupData } from "forms";

import PersonSignupValidation from "@validations/Signup/Person";

import cpfMask from "@masks/cpf";

import TextField from "@components/TextField";

import Form from "../Form";

import { initializeApollo, gql, ApolloError } from "@libs/apollo";
import { notify } from "@libs/notify";

type UserDetals = PersonSignupData;

const ADD_USER = gql`
  mutation AddUser($data: UserDetals!) {
    addUser(data: $data)
  }
`;

export default () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<PersonSignupData> = async (
    formData,
    { reset },
  ) => {
    setLoading(true);

    const valid = await PersonSignupValidation(formData, formRef);

    if (!valid) return setLoading(false);

    try {
      const apolloClient = initializeApollo();

      const {
        data: { addUser: msg },
      } = await apolloClient.mutate({
        mutation: ADD_USER,
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
      onSubmit={handleSubmit}
      ref={formRef}
      link="haveCompany"
      loading={loading}
    >
      <TextField
        name="cpf"
        label="CPF"
        helper="Digite conforme consta no documento."
        onChange={e => (e.target.value = cpfMask(e.target.value))}
      />

      <TextField
        name="name"
        label="Nome"
        margin="25px 0 0 0"
        helper="Digite conforme consta no documento."
      />
    </Form>
  );
};
