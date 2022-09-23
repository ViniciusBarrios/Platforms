import { Company, CompanyDetals } from "@resolvers-types/Company";

import { Resolver, Arg, Mutation, Query } from "type-graphql";

import { AddCompany } from "./Add";
import { ShowCompany } from "./Show";

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class CompanyResolver {
  @Query(() => Company)
  async company(@Arg("id") id: string) {
    const company = ShowCompany(id);

    return company;
  }

  @Mutation(() => String)
  async addCompany(@Arg("data") data: CompanyDetals) {
    const msg = await AddCompany(data);

    return msg;
  }
}
