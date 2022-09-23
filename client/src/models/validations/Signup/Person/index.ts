import { RefObject } from "react";

import { FormHandles } from "@unform/core";
import { PersonSignupData } from "forms";
import * as Yup from "yup";

import setError from "@validations/setError";

import { cpfValidate } from "@utils/documents";

export default async (
  data: PersonSignupData,
  formRef: RefObject<FormHandles>,
) => {
  try {
    const schema = Yup.object().shape({
      cpf: Yup.string()
        .test("cpf", "CPF inválido.", cpf => {
          if (!cpf) return false;

          return cpfValidate(cpf);
        })
        .required("Este campo é obrigatório."),
      name: Yup.string()
        .matches(
          /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
          "Digite seu nome completo.",
        )
        .required("Este campo é obrigatório."),
      email: Yup.string()
        .required("Este campo é obrigatório.")
        .email("Digite um email válido."),
      password: Yup.string()
        .min(6, "Digite no minimo 6 caracteres.")
        .max(20, "Digite no máximo 20 caracteres.")
        .required("Este campo é obrigatório."),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    formRef.current?.setErrors({});

    return true;
  } catch (err) {
    if (err instanceof Yup.ValidationError) return setError(err, formRef);
  }
};
