import {API_URL} from "@config/baseUrls";
import introspectionResult from "@generated/graphql";
import {
  ApolloClient,
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-boost";
import {createHttpLink} from "apollo-link-http";
import {useMemo} from "react";
import useAuthFlowLink from "./useAuthFlowLink";

const httpLink = createHttpLink({
  uri: API_URL,
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});

const useGlobalApolloClient = () => {
  const authFlowLink = useAuthFlowLink();

  const link = useMemo(() => authFlowLink.concat(httpLink), [authFlowLink]);

  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        link,
        cache,
      }),
    [link],
  );

  return apolloClient;
};

export default useGlobalApolloClient;
