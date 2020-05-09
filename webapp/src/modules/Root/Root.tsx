import {ApolloProvider} from "@apollo/react-hooks";
import App from "@modules/App";
import React, {FunctionComponent} from "react";
import {BrowserRouter} from "react-router-dom";
import useGlobalApolloClient from "./useGlobalApolloClient";

const Root: FunctionComponent = () => {
  const client = useGlobalApolloClient();

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Root;
