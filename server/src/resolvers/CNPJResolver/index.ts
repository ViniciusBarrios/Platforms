import { CNPJ } from "@resolvers-types/CNPJ";

import { Resolver, Arg, Query, Mutation } from "type-graphql";

import { ListCNPJ } from "./List";
import { ShowCNPJ } from "./Show";
import { UpdateCNPJ } from "./Update";

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class CNPJResolver {
  @Query(() => CNPJ)
  async cnpj(@Arg("cnpj") cnpj: string) {
    if (!cnpj) throw new Error("CNPJ é obrigatório");

    const cnpjData = await ShowCNPJ(cnpj);

    return cnpjData;
  }

  @Query(() => [CNPJ])
  async listCNPJ() {
    const data = await ListCNPJ();

    return data;
  }

  @Mutation(() => CNPJ)
  async updateCNPJ(@Arg("id") id: string) {
    if (!id) throw new Error("O id do cnpj é obrigatório");

    const cnpjUpdated = await UpdateCNPJ(id);

    return cnpjUpdated;
  }
}
