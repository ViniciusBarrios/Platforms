import { Types } from "mongoose";

import { CPFShemaType, CNPJShemaType } from "@database/models/Documents";
import { CompanyModel } from "@database/models/Company";
import { UserModel } from "@database/models/User";

import { GenerateToken } from "@providers/GenerateToken";

export const SignInToken = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Id invalido.");

  // Verificar a quem pertence o id
  const company = await CompanyModel.findById(id).populate<{
    cnpj: CNPJShemaType;
  }>("cnpj");

  const user = await UserModel.findById(id).populate<{
    cpf: CPFShemaType;
  }>("cpf");

  if (!company && !user) throw new Error("Id invalido.");

  let token_data;

  if (company) {
    token_data = {
      company: {
        id,

        avatar: "",
        bunner: "",

        cnpj: company.cnpj.number,

        name: company.name,

        email: company.email,
      },
    };
  } else if (user) {
    token_data = {
      user: {
        id,

        avatar: "",

        cpf: user.cpf.number,

        name: user.name,

        email: user.email,
      },
    };
  }

  const { token } = GenerateToken(token_data);

  return { token };
};
