import { Company } from "@resolvers-types/Company";

import { Schema } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Activity {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  code: string;

  @Field(() => String)
  description: string;
}

@ObjectType()
class Address {
  @Field(() => String)
  cep: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  neighborhood: string;

  @Field(() => String)
  street: string;

  @Field(() => String)
  number: string;

  @Field(() => String)
  complement: string;
}

@ObjectType()
export class CNPJ {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  number: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  status: string;

  @Field(() => [Activity])
  activities: Activity[];

  @Field(() => Address)
  address: Address;

  @Field(() => String)
  email: string;

  @Field(() => [String])
  telephones: string[];

  @Field(() => [Company])
  companies: Company[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  editedAt: Date;
}
