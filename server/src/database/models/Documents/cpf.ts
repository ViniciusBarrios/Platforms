import { Schema, model, Document } from "mongoose";

export type CPFShemaType = Document & {
  number: string;

  users: Schema.Types.ObjectId[];

  createdAt: Date;
  editedAt: Date;
};

const CPFSchema = new Schema<CPFShemaType>({
  number: { type: String, unique: true },

  users: [{ type: Schema.Types.ObjectId, ref: "_User_" }],

  createdAt: { type: Date, default: Date.now },
});

const CPFModel = model("_CPF_", CPFSchema);

export { CPFModel };
