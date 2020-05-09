import {onError} from "apollo-link-error";
import {useMemo} from "react";
import useUserToken from "./useUserToken";

interface Exception {
  response: unknown;
  message: string;
  status: number;
}

const useUnauthorizedErrorLink = () => {
  const [, setToken] = useUserToken();

  const unauthorizedErrorLink = useMemo(
    () =>
      onError(({graphQLErrors}) => {
        if (!graphQLErrors) {
          return;
        }

        for (const error of graphQLErrors) {
          const errException: Exception | null = error.extensions?.exception;
          console.log(errException);
          if (errException?.message === "Unauthorized") {
            setToken(null);
          }
        }
      }),
    [setToken],
  );

  return unauthorizedErrorLink;
};

export default useUnauthorizedErrorLink;
