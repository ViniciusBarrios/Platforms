import { User, UserDetals } from "@resolvers/types/User";

import { Resolver, Arg, Mutation, Query } from "type-graphql";

import { AddUser } from "./Add";
import { ShowUser } from "./Show";

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class UserResolver {
  @Query(() => User)
  async user(@Arg("id") id: string) {
    const user = ShowUser(id);

    return user;
  }

  @Mutation(() => String)
  async addUser(@Arg("data") data: UserDetals) {
    const msg = await AddUser(data);

    return msg;
  }
}
