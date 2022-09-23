import { useRef, useState, useContext } from "react";

import { SubmitHandler, FormHandles } from "@unform/core";
import { SignInData } from "forms";

import SignInValidation from "@validations/SignIn";

import Button from "@components/Button";
import ForgotPassword from "@components/ForgotPassword";
import TextField from "@components/TextField";

import { AuthContext } from "@contexts/AuthContext";

import { Container, Wrapper } from "./styles";

import { notify } from "@libs/notify";

export default () => {
  const { signIn } = useContext(AuthContext);

  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<SignInData> = async (data, { reset }) => {
    const valid = await SignInValidation(data, formRef);

    setLoading(true);

    if (!valid) return setLoading(false);

    const { error, message } = await signIn(data);

    setLoading(false);

    if (message) notify(message, { type: "info" });

    if (error) return notify(error);

    reset();
  };

  return (
    <Container>
      <Wrapper ref={formRef} onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          helper="Digite conforme digitado no cadastro."
        />

        <TextField
          name="password"
          label="Senha"
          type="password"
          margin="25px 0 0 0"
          maxLength={20}
          helper="Digite conforme digitado no cadastro."
        />

        <Button type="submit" loading={loading} css={{ marginTop: "25px" }}>
          Entrar
        </Button>
      </Wrapper>

      <ForgotPassword />
    </Container>
  );
};
