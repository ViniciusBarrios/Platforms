declare module "forms" {
  type PersonSignupData = {
    cpf: string;
    name: string;
    email: string;
    password: string;
  };

  type CompanySignupData = {
    cnpj: string;
    name: string;
    email: string;
    password: string;
  };

  type SignInData = {
    email: string;
    password: string;
    remember_password: boolean;
  };

  type FeedbackData = {
    message: string;
    feedback: string;
  };
}
