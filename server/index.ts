import "reflect-metadata";
import "dotenv/config";
import "@database/connection";

import * as path from "path";
import * as joiful from "joiful";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { CNPJResolver } from "@resolvers/CNPJResolver";
import { CompanyResolver } from "@resolvers/CompanyResolver";
import { SignInResolver } from "@resolvers/SignInResolver";
import { UserResolver } from "@resolvers/UserResolver";

const startApolloServer = async (server: ApolloServer) => {
  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });

  console.log(`🚀 Server is running on port ${port}, query at ${url}`);
};

(async () => {
  const schema = await buildSchema({
    resolvers: [CNPJResolver, CompanyResolver, SignInResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    validate: argValue => {
      const { error } = joiful.validate(argValue);

      if (error) {
        throw error;
      }
    },
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
  });

  startApolloServer(server);
})().catch(err => console.log(err));
