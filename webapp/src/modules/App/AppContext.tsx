import {User} from "@generated/graphql";
import {Context, createContext} from "react";

type CurrentUserType = Pick<User, "id" | "email">;

export interface AppContextType {
  currentUser: CurrentUserType | null;
  refetchCurrentUser: () => Promise<unknown>;
}

const AppContext: Context<AppContextType> = createContext<AppContextType>({
  currentUser: null,
  refetchCurrentUser: () => {
    throw new Error("Set context value first!");
  },
});

export default AppContext;
