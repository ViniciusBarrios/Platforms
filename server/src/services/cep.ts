import axios from "axios";

import { cepMask } from "@utils/masks";

type APIResponse = {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

export const GetCEP = async (cep: string) => {
  cep = cep.replace(/\D/g, "");

  const { data } = await axios.get<APIResponse>(
    `https://brasilapi.com.br/api/cep/v1/${cep}`,
  );

  return {
    cep: cepMask(cep),
    city: data.city,
    state: data.state,
    neighborhood: data.neighborhood,
    street: data.street,
  };
};
