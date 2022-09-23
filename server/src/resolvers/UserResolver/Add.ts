import { CompanyModel } from "@database/models/Company";
import { UserModel } from "@database/models/User";
import { CPFModel, CPFShemaType } from "@database/models/Documents";

import { cpfValidate } from "@utils/documents";
import { cpfMask } from "@utils/masks";

type RequestType = {
  cpf: string;
  name: string;
  email: string;
  password: string;
};

export const AddUser = async ({ cpf, name, email, password }: RequestType) => {
  cpf = cpfMask(cpf);

  // Verificar se ja existe alguma empresa ou usuario cadastrada com esse email
  const companyAlreadyExist = await CompanyModel.findOne({ email });
  const userAlreadyExist = await UserModel.findOne({ email });

  if (companyAlreadyExist || userAlreadyExist)
    throw new Error(`O email ${email} já existe.`);

  if (!cpfValidate(cpf)) throw new Error(`CPF ${cpf} inválido.`);

  let cpfData: CPFShemaType | null;

  if (!(await CPFModel.findOne({ number: cpf }))) {
    cpfData = await CPFModel.create({
      number: cpf,
    });
  } else {
    cpfData = await CPFModel.findOne({ number: cpf });
  }

  if (!cpfData) throw new Error("Ocorreu algum erro.");

  const user = await UserModel.create({
    cpf: cpfData._id,

    name,

    email,

    password,
  });

  await CPFModel.findByIdAndUpdate(cpfData._id, {
    $push: { users: user._id },
  });

  return "Usuário criado com sucesso!";
};
