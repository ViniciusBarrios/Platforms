import { SignInData, SignInDetals } from "@resolvers-types/SignIn";

import { Resolver, Arg, Mutation } from "type-graphql";

import { DecodeToken } from "./DecodeToken";
import { SignIn } from "./SignIn";

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class SignInResolver {
  @Mutation(() => String)
  async decodeToken(@Arg("token") token: string) {
    const tokenData = await DecodeToken(token);

    return JSON.stringify(tokenData);
  }

  @Mutation(() => SignInData)
  async signIn(@Arg("data") data: SignInDetals) {
    const { token } = await SignIn(data);

    return { token };
  }
}
