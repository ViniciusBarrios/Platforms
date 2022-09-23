import { useMemo } from "react";

import {
  gql,
  ApolloError,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  FetchResult,
  MutationOptions,
  DefaultContext,
  OperationVariables,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({ uri: process.env.APOLLO_SERVER_URL }),
    cache: new InMemoryCache(),
  });
};

const initializeApollo = (initialState = {}) => {
  // serve para verificar se já existe uma instância, para não criar outra.
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // se ja existe um estado inicial ele restaura para dentro do global (recupera os dados de cache)
  if (initialState) apolloClientGlobal.cache.restore(initialState);

  // se estiver no ssr retornar o apolloClientGlobal direto (sempre inicializando no SSR com cache limpo)
  if (typeof window === "undefined") return apolloClientGlobal;

  // se não estiver no SSR verifica e pega o apolloClient que tinha antes ou o apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal;

  // por fim retorna o objeto do apolloClient
  return apolloClient;
};

const mutate = async <
  Data = any,
  Variables = OperationVariables,
  Context = DefaultContext,
>(
  options: MutationOptions<Data, Variables, Context>,
): Promise<FetchResult<Data>> => {
  const apolloClient = initializeApollo();

  const { data, errors, context, extensions } = await apolloClient.mutate(
    options,
  );

  const newData: Data = data && Object.values(data)[0];

  return { data: newData, errors, context, extensions };
};

// utilizano um memorize para caso o initialState nao mudar nao ficar reinicializando
const useApollo = (initialState = {}) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};

export { gql, initializeApollo, mutate, useApollo, ApolloError };
