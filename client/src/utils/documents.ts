import { cpf, cnpj } from "cpf-cnpj-validator";

const cpfValidate = (document: string) => {
  const valid = cpf.isValid(document);

  return valid;
};

const cnpjValidate = (document: string) => {
  const valid = cnpj.isValid(document);

  return valid;
};

export { cpfValidate, cnpjValidate };
