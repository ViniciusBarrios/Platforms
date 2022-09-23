import jwt, { SignOptions } from "jsonwebtoken";

export const GenerateToken = (token_data: any, options?: SignOptions) => {
  // Gerar token
  const token = jwt.sign(token_data, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
    ...options,
  });

  return { token };
};
