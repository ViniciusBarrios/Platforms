import Informations from "@components/Informations";

import Forms from "./Forms";
import { Container, Wrapper, Content } from "./styles";

type SignupProps = {
  formType: "company" | "person";
};

export default ({ formType }: SignupProps) => {
  const titleCompany = "Pré-cadastro para empresas.";
  const textCompany =
    "Após informar seu interesse seu pedido será analisado por nossa equipe e entraremos em contato para novos passos.";

  const titlePerson = "Crie sua conta pessoal";
  const textPerson =
    "Faça escolha de melhorar o mundo hoje jundo conosco, conheça nossa plataforma e veja oque nos viemos resolver.";

  return (
    <Container>
      <Wrapper>
        <Content>
          <Informations
            title={formType === "company" ? titleCompany : titlePerson}
            text={formType === "company" ? textCompany : textPerson}
            direction="left"
            informationLink={{
              to: "/signin",
              text: "Já possui uma conta?",
            }}
          />

          <Forms formType={formType} />
        </Content>
      </Wrapper>
    </Container>
  );
};
