import React, { useEffect, useRef } from "react";

import { styled } from "stitches";

import { useField } from "@unform/core";

const Input = styled("input", {});

export type InputProps = React.ComponentProps<typeof Input> & {
  name: string;
  setError?(string: string): void;
};

export default ({ name, setError, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (setError) {
      if (error) setError(error);
      else if (!error) setError("");
    }
  }, [error, setError]);

  return <Input ref={inputRef} name={name} {...props} />;
};
