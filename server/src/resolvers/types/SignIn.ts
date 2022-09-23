import * as joiful from "joiful";

import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
@InputType("SignInDetals")
export class SignInDetals {
  @Field(() => String)
  @joiful.string().email().required()
  email: string;

  @Field(() => String)
  @joiful.string().min(6).max(20).required()
  password: string;
}

@ObjectType()
export class SignInData {
  @Field(() => String)
  token: string;
}
