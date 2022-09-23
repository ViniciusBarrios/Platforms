import { CNPJModel, CNPJShemaType } from "@database/models/Documents";

import { GetCNPJ } from "@services/cnpj";

import { cnpjValidate } from "@utils/documents";
import { cnpjMask } from "@utils/masks";

export const ShowCNPJ = async (cnpj: string) => {
  if (!cnpjValidate(cnpj)) throw new Error("CNPJ inválido.");

  let cnpjData: CNPJShemaType | null;

  if (!(await CNPJModel.findOne({ number: cnpjMask(cnpj) }))) {
    cnpjData = await (
      await CNPJModel.create(await GetCNPJ(cnpj))
    ).populate("companies");
  } else {
    cnpjData = await CNPJModel.findOne({ number: cnpjMask(cnpj) }).populate(
      "companies",
    );
  }

  if (!cnpjData) throw new Error("Ocorreu algum erro.");

  return cnpjData;
};
