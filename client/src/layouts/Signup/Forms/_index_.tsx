import Company from "./components/Company";
import Person from "./components/Person";
import { Container } from "./styles";

type FormsProps = {
  formType: "company" | "person";
};

export default ({ formType }: FormsProps) => {
  return (
    <Container>
      {formType === "person" && <Person />}
      {formType === "company" && <Company />}
    </Container>
  );
};
