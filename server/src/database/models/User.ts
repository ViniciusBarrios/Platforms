import { CPFShemaType } from "@database/models/Documents";

import { Schema, model } from "mongoose";

import bcrypt from "bcryptjs";

export type UserShemaType = {
  cpf: CPFShemaType;
  name: string;

  email: string;
  telephones?: string[];
  password: string;

  createdAt: Date;
};

const UserSchema = new Schema<UserShemaType>({
  cpf: { type: Schema.Types.ObjectId, ref: "_CPF_", required: true },

  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 11);
  this.password = hash;

  next();
});

const UserModel = model("_USER_", UserSchema);

export { UserModel };
