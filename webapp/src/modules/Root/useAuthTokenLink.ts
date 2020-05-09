import {setContext} from "apollo-link-context";
import {useMemo} from "react";
import useUserToken from "./useUserToken";

const useAuthTokenLink = () => {
  const [getToken] = useUserToken();

  const authTokenLink = useMemo(
    () =>
      setContext(async (_, context) => {
        const token = getToken();
        const {headers, skipAuthentication = false} = context;

        if (skipAuthentication) {
          return context;
        }

        // TODO: Add auto refresh

        return {
          ...context,
          headers: {
            ...headers,
            ...(token && {authorization: `Bearer ${token.token}`}),
          },
        };
      }),
    [getToken],
  );

  return authTokenLink;
};

export default useAuthTokenLink;
