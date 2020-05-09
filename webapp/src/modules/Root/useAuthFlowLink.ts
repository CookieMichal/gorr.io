import {useMemo} from "react";
import useAuthTokenLink from "./useAuthTokenLink";
import useUnauthorizedErrorLink from "./useUnauthorizedErrorLink";

const useAuthFlowLink = () => {
  const authTokenLink = useAuthTokenLink();
  const unauthorizedErrorLink = useUnauthorizedErrorLink();

  const authFlowLink = useMemo(
    () => authTokenLink.concat(unauthorizedErrorLink),
    [authTokenLink, unauthorizedErrorLink],
  );

  return authFlowLink;
};

export default useAuthFlowLink;
