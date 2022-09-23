import { RefObject } from "react";

import { FormHandles } from "@unform/core";
import { SignInData } from "forms";
import * as Yup from "yup";

import setError from "@validations/setError";

export default async (data: SignInData, formRef: RefObject<FormHandles>) => {
  try {
    const schema = Yup.object().shape({
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
