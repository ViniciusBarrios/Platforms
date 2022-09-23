import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
} from "@components/Modal";

import Form from "./Form";
import { Container, ButtonForgotPassword } from "./styles";

export default () => {
  return (
    <Container>
      <Modal>
        <span>
          Esqueceu a sua senha?{" "}
          <ModalTrigger>
            <ButtonForgotPassword>Recuperar senha</ButtonForgotPassword>
          </ModalTrigger>
        </span>

        <ModalContent
          width={450}
          maintainDimentions={true}
          css={{ padding: 25 }}
        >
          <ModalCloseButton />

          <ModalTitle>Recuperar senha</ModalTitle>

          <ModalDescription>
            Recupere sua senha adicionando seu email aqui. Clique em recuperar
            quando terminar.
          </ModalDescription>

          <Form />
        </ModalContent>
      </Modal>
    </Container>
  );
};
