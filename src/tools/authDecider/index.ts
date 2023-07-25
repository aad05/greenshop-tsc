import { useIsAuthenticated } from "react-auth-kit";

type AuthDeciderFuncType = {
  withAuth?: () => any;
  withoutAuth?: () => any;
};

type AuthDeciderHtmlType = {
  withAuth?: React.ReactNode;
  withoutAuth?: React.ReactNode;
};

export const useAuthDecider = () => {
  const isAuthed = useIsAuthenticated();
  const authed = isAuthed();

  // Function
  const auth_decider_func = ({ withAuth, withoutAuth }: AuthDeciderFuncType) =>
    authed ? withAuth?.() : withoutAuth?.();

  // Html
  const auth_decider_html = ({ withAuth, withoutAuth }: AuthDeciderHtmlType) =>
    authed ? withAuth : withoutAuth;

  return {
    auth_decider_func,
    auth_decider_html,
  };
};
