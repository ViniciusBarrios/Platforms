import Informations from "@components/Informations";

import Form from "./Form";
import { Container, Wrapper, Content } from "./styles";

export default () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Informations
            title="Ah, não! Você está indo embora... Tem certeza?"
            text="Tem certeza que deseja sair da plataforma? escolha sua opção clicado nos botões."
            direction="right"
          />

          <Form />
        </Content>
      </Wrapper>
    </Container>
  );
};
