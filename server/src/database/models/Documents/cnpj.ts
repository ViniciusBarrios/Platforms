import { Schema, model, Document } from "mongoose";

export type CNPJShemaType = Document & {
  number: string;
  status: string; // Se a empresa está ativa ou não
  name: string; // Nome da empresa

  activities: {
    primary: {
      code: string;
      description: string;
    };
    secondary: {
      code: string;
      description: string;
    }[];
  };

  address: {
    cep: string;
    city: string;
    state: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
  };

  email: string;
  telephones?: string[];

  companies: Schema.Types.ObjectId[];

  createdAt: Date; // Data de criação do cnpj
  editedAt: Date; // Ultima atualização
};

const CNPJSchema = new Schema<CNPJShemaType>({
  number: { type: String, unique: true },
  status: String,
  name: String,

  activities: [
    {
      code: String,
      description: String,
    },
  ],

  address: {
    cep: String,
    city: String,
    state: String,
    neighborhood: String,
    street: String,
    number: String,
    complement: String,
  },

  email: String,
  telephones: [String],

  companies: [{ type: Schema.Types.ObjectId, ref: "_Company_" }],

  createdAt: Date,
  editedAt: Date,
});

const CNPJModel = model("_CNPJ_", CNPJSchema);

export { CNPJModel };
