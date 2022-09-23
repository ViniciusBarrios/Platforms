import { CNPJ } from "@resolvers-types/CNPJ";

import * as joiful from "joiful";

import { Schema } from "mongoose";

import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
@InputType("CompanyDetals")
export class CompanyDetals {
  @Field(() => String)
  @joiful.string().required()
  cnpj: string;

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
export class Company {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => CNPJ)
  cnpj: CNPJ;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => [String])
  telephones: string[];

  @Field(() => String)
  status: "active" | "disabled" | "pending";

  @Field(() => Date)
  createdAt: Date;
}
