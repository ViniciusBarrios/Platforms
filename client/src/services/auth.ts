import { mutate, gql, ApolloError } from "@libs/apollo";

type SignInRequest = {
  email: string;
  password: string;
};

type SignInResponse = {
  token: string;
};

const DECODE_TOKEN = gql`
  mutation DecodeToken($token: String!) {
    decodeToken(token: $token)
  }
`;

type SignInDetals = SignInRequest;

const SIGN_IN = gql`
  mutation signIn($signInData: SignInDetals!) {
    signIn(data: $signInData) {
      token
    }
  }
`;

type DecodeTokenType = {
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
  error?: string;
};

const decodeToken = async (token: string): Promise<DecodeTokenType> => {
  try {
    const { data: tokenData } = await mutate<string>({
      mutation: DECODE_TOKEN,
      variables: { token },
    });

    console.log(tokenData);
    if (!tokenData) return { error: "Ocorreu algum erro." };

    return JSON.parse(tokenData);
  } catch (err) {
    console.log(err);

    if (err instanceof ApolloError) return { error: err.message };

    if (err instanceof Error) return { error: err.message };

    return { error: "Ocorreu algum erro." };
  }
};

const signInRequest = async (signInData: SignInRequest) => {
  try {
    const { data } = await mutate<SignInResponse>({
      mutation: SIGN_IN,
      variables: { signInData },
    });

    if (!data) return { error: "Ocorreu algum erro." };

    const { token } = data;

    const { company, user, error } = await decodeToken(token);

    if (error) return { error };

    return { token, company, user };
  } catch (err) {
    if (err instanceof ApolloError) return { error: err.message };

    if (err instanceof Error) return { error: err.message };

    return { error: "Ocorreu algum erro." };
  }
};

export { decodeToken, signInRequest };
