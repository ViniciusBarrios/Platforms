import InputOutlined, { InputOutlinedProps } from "./components/Outlined";

export type InputProps = InputOutlinedProps & {
  variant?: "outlined" | "standard";
};

export default ({ variant = "outlined", ...props }: InputProps) => {
  return (
    <>
      {variant === "outlined" && <InputOutlined {...props} />}

      {/* {variant === "standard" && (
        <InputStandard ref={inputRef} {...props} error={error} />
      )} */}
    </>
  );
};
