import { RefObject } from "react";

import { FormHandles } from "@unform/core";
import { ValidationError } from "yup";

export default (err: ValidationError, formRef: RefObject<FormHandles>) => {
  const errorMessages: { [key: string]: string } = {};

  err.inner.forEach(error => {
    errorMessages[error.path!] = error.message;
  });

  formRef.current?.setErrors(errorMessages);

  return false;
};
