import jwt from "jsonwebtoken";

export const DecodeToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    return decoded;
  } catch (err) {
    throw new Error("Token inválido!");
  }
};
