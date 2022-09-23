import { CompanyModel } from "@database/models/Company";
import { UserModel } from "@database/models/User";

import bcrypt from "bcryptjs";

import { SignInToken } from "@helpers/SignInToken";

type RequestType = {
  email: string;
  password: string;
};

export const SignIn = async ({ email, password }: RequestType) => {
  // Verificar se ja existe alguma empresa ou usuario cadastrada com esse email
  const companyAlreadyExist = await CompanyModel.findOne({
    email,
  });
  const userAlreadyExist = await UserModel.findOne({ email });

  if (!companyAlreadyExist && !userAlreadyExist)
    throw new Error("Email ou senha inválidos.");

  // Verificar se a senha está correta
  const passwordEncrypted =
    companyAlreadyExist?.password || userAlreadyExist?.password || "";

  const passwordMatch = await bcrypt.compare(password, passwordEncrypted);

  if (!passwordMatch) throw new Error("Email ou senha inválidos.");

  const id = String(companyAlreadyExist?._id || userAlreadyExist?._id);

  // Verificar se a empresa está ativa na plataforma
  if (companyAlreadyExist)
    if (companyAlreadyExist.status !== "active")
      throw new Error(
        "Esta empresa não pode efetuar o login porque não está ativa na plataforma.",
      );

  // Gerar o token
  const { token } = await SignInToken(id);

  return { token };
};
