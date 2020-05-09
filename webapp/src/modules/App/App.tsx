import {useMeQuery} from "@generated/graphql";
import React, {Suspense, useEffect, useMemo, useState} from "react";
import {Switch} from "react-router";
import AppContext, {AppContextType} from "./AppContext";
import AppRoute from "./AppRoute";
import GlobalStyle from "./GlobalStyles";
import routes from "./routes";

const routeComponents = routes.map((route, index) => (
  <AppRoute key={index} {...route} />
));

const App = () => {
  const [currentUser, setCurrentUser] = useState<AppContextType["currentUser"]>(
    null,
  );
  const {data, refetch} = useMeQuery();

  useEffect(() => {
    if (!data) return;
    setCurrentUser(data.me);
  }, [data]);

  const context = useMemo<AppContextType>(
    () => ({
      currentUser,
      refetchCurrentUser: refetch,
    }),
    [currentUser, refetch],
  );

  return (
    <AppContext.Provider value={context}>
      <GlobalStyle />
      <Suspense fallback={"Loading..."}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;
