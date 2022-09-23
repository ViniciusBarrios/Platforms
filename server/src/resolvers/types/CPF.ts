import { User } from "@resolvers-types/User";

import { Schema } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class CPF {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  number: string;

  @Field(() => [User])
  users: User[];

  @Field(() => Date)
  createdAt: Date;
}
