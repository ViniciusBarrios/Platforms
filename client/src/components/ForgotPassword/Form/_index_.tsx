import Button from "@components/Button";
import { ModalClose } from "@components/Modal";
import TextField from "@components/TextField";

import { Container, ButtonWrapper } from "./styles";

export default () => {
  return (
    <Container onSubmit={data => console.log(data)}>
      <h1>Formulario para recuperação de senha</h1>
    </Container>
  );
};
