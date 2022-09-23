import { CPF } from "@resolvers-types/CPF";

import { Schema } from "mongoose";

import * as joiful from "joiful";

import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
@InputType("UserDetals")
export class UserDetals {
  @Field(() => String)
  @joiful.string().required()
  cpf: string;

  @Field(() => String)
  @joiful.string().required()
  name: string;

  @Field(() => String)
  @joiful.string().email().required()
  email: string;

  @Field(() => String)
  @joiful.string().min(6).max(20).required()
  password: string;
}

@ObjectType()
export class User {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => CPF)
  cpf: CPF;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date)
  createdAt: Date;
}
