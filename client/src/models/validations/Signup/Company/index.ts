import { RefObject } from "react";

import { FormHandles } from "@unform/core";
import { CompanySignupData } from "forms";
import * as Yup from "yup";

import setError from "@validations/setError";

import { cnpjValidate } from "@utils/documents";

export default async (
  data: CompanySignupData,
  formRef: RefObject<FormHandles>,
) => {
  try {
    const schema = Yup.object().shape({
      cnpj: Yup.string()
        .test("cnpj", "CNPJ inválido.", cnpj => {
          if (!cnpj) return false;

          return cnpjValidate(cnpj);
        })
        .required("Este campo é obrigatório."),
      name: Yup.string().required("Este campo é obrigatório."),
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
