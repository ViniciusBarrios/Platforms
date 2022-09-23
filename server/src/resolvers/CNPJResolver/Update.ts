import { Types } from "mongoose";

import { CNPJModel } from "@database/models/Documents";

import { GetCNPJ } from "@services/cnpj";

export const UpdateCNPJ = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) throw new Error("Id inválido.");

  const cnpjData = await CNPJModel.findById(id);

  if (!cnpjData) throw new Error("Id inválido.");

  const cnpjUpdatedData = await GetCNPJ(cnpjData.number);

  const data = await CNPJModel.findByIdAndUpdate(id, cnpjUpdatedData);

  return data;
};
