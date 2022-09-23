import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { SignInData } from "forms";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { decodeToken, signInRequest } from "@services/auth";

export type DataType = {
  company?: {
    id: string;
    cnpj: string;
    name: string;
    avatar: string;
    bunner: string;
    email: string;
  };
  user?: {
    id: string;
    cpf: string;
    name: string;
    avatar: string;
    email: string;
  };
};

export const useAuth = () => {
  const router = useRouter();

  const [data, setData] = useState<DataType | null>(null);

  const isAuthenticated = !!data;

  useEffect(() => {
    (async () => {
      const { "animalbft.token": token } = parseCookies();

      if (token) {
        const { user, company, error } = await decodeToken(token);

        if (error) return;

        if (company) setData({ company });
        if (user) setData({ user });
      }
    })();
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    const { token, company, user, error } = await signInRequest({
      email,
      password,
    });

    if (error) return { error };

    if (!token) return { error: "Ocorreu algum erro." };

    setCookie(null, "animalbft.token", token, {
      maxAge: 60 * 60 * 24, // 24 hours
    });

    if (company) setData({ company });
    if (user) setData({ user });

    router.push("/");

    return {
      message: company
        ? "Bem-vindo a plataforma."
        : `Olá ${user?.name.split(" ")[0]} 👋, bem-vindo a plataforma.`,
    };
  };

  const logOut = async () => {
    if (!isAuthenticated)
      throw new Error(
        "Não tem como usar o logout se não existe usuário logado.",
      );

    destroyCookie(null, "animalbft.token");

    router.push("/signin");
  };

  return { data, isAuthenticated, signIn, logOut };
};
