import { Schema, model } from "mongoose";

import bcrypt from "bcryptjs";

export type CompanyShemaType = {
  cnpj: Schema.Types.ObjectId;
  name: string;

  email: string;
  telephones?: string[];
  password: string;

  status: "active" | "disabled" | "pending";

  createdAt: Date;
};

const CompanySchema = new Schema<CompanyShemaType>({
  cnpj: { type: Schema.Types.ObjectId, ref: "_CNPJ_", required: true },
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  telephones: [{ type: String, required: true }],
  password: { type: String, required: true },

  status: { type: String, default: "pending", required: true },

  createdAt: { type: Date, default: Date.now },
});

CompanySchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 11);
  this.password = hash;

  next();
});

const CompanyModel = model("_COMPANY_", CompanySchema);

export { CompanyModel };
