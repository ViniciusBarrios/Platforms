import NextImage, { ImageProps } from "next/image";

export default ({
  alt = "Animal Buy - There's no description here!",
  ...props
}: ImageProps) => {
  return <NextImage alt={alt} {...props} />;
};
