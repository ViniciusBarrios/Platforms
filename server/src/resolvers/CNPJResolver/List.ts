import { CNPJModel } from "@database/models/Documents";

export const ListCNPJ = async () => {
  const data = await CNPJModel.find();

  return data;
};
