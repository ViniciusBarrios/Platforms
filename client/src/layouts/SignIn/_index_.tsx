import Informations from "@components/Informations";

import Form from "./Form";
import { Container, Wrapper, Content } from "./styles";

export default () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Informations
            title="Entre na plataforma"
            text="Entre na plataforma e junte-se a nós para mudar o rumo da história, a mudança começa com você."
            direction="right"
            informationLink={{
              to: "/signup",
              text: "Não possui uma conta?",
            }}
          />

          <Form />
        </Content>
      </Wrapper>
    </Container>
  );
};
