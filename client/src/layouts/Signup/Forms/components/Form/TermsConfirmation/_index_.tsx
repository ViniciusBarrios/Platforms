import { Property } from "@stitches/react/types/css";

import Link from "@infra/Link";

import { Container } from "./styles";

export default () => {
  return (
    <Container>
      Ao clicar em cadastre-se, você aceita com nossos{" "}
      <Link to="/help/terms-conditions/use-terms" id="link" underline>
        termos de uso
      </Link>{" "}
      e autoriza o uso de seus dados de acordo com a{" "}
      <Link to="/help/terms-conditions/privacy-policy" id="link" underline>
        política de privacidade.
      </Link>
    </Container>
  );
};
