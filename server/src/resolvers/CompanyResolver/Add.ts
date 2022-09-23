import { CompanyModel } from "@database/models/Company";
import { UserModel } from "@database/models/User";
import { CNPJModel, CNPJShemaType } from "@database/models/Documents";

import { GetCNPJ } from "@services/cnpj";

import { cnpjValidate } from "@utils/documents";
import { cnpjMask } from "@utils/masks";

type RequestType = {
  cnpj: string;
  name: string;
  email: string;
  password: string;
};

export const AddCompany = async ({
  cnpj,
  name,
  email,
  password,
}: RequestType) => {
  cnpj = cnpjMask(cnpj);

  // Verificar se ja existe alguma empresa ou usuario cadastrada com esse email
  const companyAlreadyExist = await CompanyModel.findOne({ email });
  const userAlreadyExist = await UserModel.findOne({ email });

  if (companyAlreadyExist || userAlreadyExist)
    throw new Error(`O email ${email} já existe.`);

  if (!cnpjValidate(cnpj)) throw new Error(`CNPJ ${cnpj} inválido.`);

  let cnpjData: CNPJShemaType | null;

  if (!(await CNPJModel.findOne({ number: cnpj }))) {
    cnpjData = await CNPJModel.create(await GetCNPJ(cnpj));
  } else {
    cnpjData = await CNPJModel.findOne({ number: cnpj });
  }

  if (!cnpjData) throw new Error("Ocorreu algum erro.");

  await CompanyModel.create({
    cnpj: cnpjData._id,
    name,

    email,
    telephones: cnpjData.telephones,

    password,
  });

  return "Empresa criada com sucesso!";
};
