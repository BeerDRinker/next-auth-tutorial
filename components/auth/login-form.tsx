import { CardWrapper } from "./card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      headerLabel="Welcome back"
      showSocial
    >
      Login form
    </CardWrapper>
  );
}
