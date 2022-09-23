import { Types } from "mongoose";

import { UserModel } from "@database/models/User";

export const ShowUser = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Id inválido.");

  const user = await UserModel.findById(id).populate("cpf");

  if (!user) throw new Error("Id inválido.");

  return user;
};
