import { Types } from "mongoose";

import { CompanyModel } from "@database/models/Company";

export const ShowCompany = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Id inválido.");

  const company = await CompanyModel.findById(id).populate("cnpj");

  if (!company) throw new Error("Id inválido.");

  return company;
};
