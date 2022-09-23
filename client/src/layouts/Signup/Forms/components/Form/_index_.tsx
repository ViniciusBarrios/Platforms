import React from "react";

import { SubmitHandler, FormHandles } from "@unform/core";

import Button from "@components/Button";
import TextField from "@components/TextField";

import { Container, HaveCompany, CreateAccont, NotHaveCompany } from "./styles";
import TermsConfirmation from "./TermsConfirmation";

type FormProps = React.ComponentProps<any> & {
  onSubmit: SubmitHandler;
  link?: "haveCompany" | "notHeveCompany";
  loading?: boolean;
};

export default React.forwardRef<FormHandles, FormProps>(
  ({ onSubmit, link, loading, children }, ref) => {
    const scrollTop = () => {
      setTimeout(() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }, 200);
    };

    return (
      <Container ref={ref} onSubmit={onSubmit}>
        {children}

        <TextField
          name="email"
          label="Email"
          helper="Certifique-se de ter acesso a este e-mail."
          margin="25px 0 0 0"
        />

        <TextField
          name="password"
          label="Senha"
          helper="Digite no minimo 6 caracteres."
          type="password"
          margin="25px 0 0 0"
          maxLength={20}
        />

        <TermsConfirmation />

        <Button type="submit" loading={loading} css={{ marginTop: "25px" }}>
          Cadastre-se
        </Button>

        {link === "haveCompany" && (
          <HaveCompany>
            <p>Tem um canil, gatil ou criatório?</p>

            <CreateAccont
              underline
              to="/signup?type=company"
              onClick={scrollTop}
            >
              Crie uma conta.
            </CreateAccont>
          </HaveCompany>
        )}

        {link === "notHeveCompany" && (
          <NotHaveCompany>
            <p>Não tem uma conta?</p>

            <CreateAccont
              underline
              to="/signup?type=person"
              onClick={scrollTop}
            >
              Crie uma conta.
            </CreateAccont>
          </NotHaveCompany>
        )}
      </Container>
    );
  },
);
