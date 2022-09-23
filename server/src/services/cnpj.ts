import axios from "axios";
import dayjs from "dayjs";

import { GetCEP } from "@services/cep";

import { cnpjMask } from "@utils/masks";

type APIResponse = {
  uf: "EX" | string;
  abertura: string;
  situacao: string;
  nome: string;
  atividade_principal: {
    code: string;
    text: string;
  }[];
  atividades_secundarias: {
    code: string;
    text: string;
  }[];
  cep: string;
  numero: string;
  complemento: string;
  telefone: string;
  email: string;
  ultima_atualizacao: string;
};

export const GetCNPJ = async (cnpj: string) => {
  cnpj = cnpj.replace(/\D/g, "");

  try {
    const { data } = await axios.get<APIResponse>(
      `https://receitaws.com.br/v1/cnpj/${cnpj}`,
    );

    if (data.uf === "EX") {
      return {
        message: "Este cnpj é do exterior.",
      };
    }

    const cepData = await GetCEP(data.cep);

    return {
      number: cnpjMask(cnpj),
      status: data.situacao,
      name: data.nome,
      activities: [
        {
          code: data.atividade_principal[0].code,
          description: data.atividade_principal[0].text,
        },
        ...data.atividades_secundarias.map(({ code, text }) => ({
          code,
          description: text,
        })),
      ],
      address: {
        ...cepData,
        number: data.numero,
        complement: data.complemento,
      },
      telephones: data.telefone.split("/ "),
      email: data.email,
      createdAt: dayjs(data.abertura.split("/").reverse().join("/")).format(),
      editedAt: data.ultima_atualizacao,
    };
  } catch (err: any) {
    const { status, statusText } = err.response;

    if (status === 404) {
      throw new Error(`CNPJ ${cnpjMask(cnpj)} inválido.`);
    } else if (status === 429) {
      throw new Error("Muitos peditos, aguarde alguns instantes.");
    } else {
      throw new Error(statusText);
    }
  }
};
