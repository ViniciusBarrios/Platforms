import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

import { AuthProvider } from "@contexts/AuthContext";

import GlobalStyles from "@styles/global";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@libs/apollo";

export default ({ Component, pageProps }: AppProps) => {
  GlobalStyles();

  // instanciando o client, com initialState para cache
  const client = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    window.addEventListener("contextmenu", (e: Event) => {
      e.preventDefault();
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />

        <ToastContainer />
      </AuthProvider>
    </ApolloProvider>
  );
};
