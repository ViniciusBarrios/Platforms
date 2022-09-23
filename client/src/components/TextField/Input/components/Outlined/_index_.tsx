import React, { useState } from "react";

import type { StitchesCssType } from "stitches";

import ButtonShowPassword from "./ButtonShowPassword";
import { Container, Wrapper, Input, Label, Helper } from "./styles";

export type OutlinedProps = React.ComponentProps<typeof Input> & {
  width?: StitchesCssType["width"];
  label: string;
  name: string;
  placeholder?: string;
  margin?: StitchesCssType["margin"];
  type?: HTMLInputElement["type"];
  helper?: string;
};

export default ({
  width = "100%",
  label,
  name,
  placeholder = "Digite aqui...",
  margin,
  type = "text",
  maxLength,
  helper,
  ...props
}: OutlinedProps) => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  return (
    <Container>
      <Wrapper css={{ width, height: 55, margin }}>
        <Input
          name={name}
          type={type !== "password" ? "text" : showPass ? "text" : "password"}
          autoComplete="off"
          placeholder={placeholder}
          css={{
            padding: `20px ${type === "password" ? "50px" : "15px"} 20px 15px`,

            ...(error && {
              color: "$textField-error !important",
              borderColor: "$textField-error !important",

              caretColor: "$textField-error !important",

              "&::-webkit-input-placeholder": {
                color: "$textField-error !important",
              },

              "&:-moz-placeholder": { color: "$textField-error !important" },
            }),
          }}
          setError={setError}
          maxLength={maxLength}
          {...props}
        />

        <Label
          htmlFor={name}
          id="label"
          css={{
            ...(error && {
              color: "$textField-error !important",
            }),
          }}
        >
          {label}
        </Label>

        {type === "password" && (
          <ButtonShowPassword
            showPass={showPass}
            setShowPass={setShowPass}
            css={{
              ...(error && {
                color: "$textField-error !important",
              }),
            }}
          />
        )}
      </Wrapper>

      {helper || error ? (
        <Helper
          css={{
            ...(error && {
              color: "$textField-error !important",
            }),
          }}
        >
          {error ? error : helper}
        </Helper>
      ) : null}
    </Container>
  );
};
