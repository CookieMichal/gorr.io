import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Visit = {
  __typename?: "Visit";
  id: Scalars["Int"];
  ip?: Maybe<Scalars["String"]>;
  userAgent?: Maybe<Scalars["String"]>;
  referer?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  link?: Maybe<Link>;
};

export type Link = {
  __typename?: "Link";
  id: Scalars["Int"];
  slug: Scalars["String"];
  target: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  user?: Maybe<User>;
  visits?: Maybe<Array<Visit>>;
  visitsCount: Scalars["Float"];
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  email: Scalars["String"];
  links: Array<Link>;
  createdAt: Scalars["DateTime"];
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  me: User;
};

export type Mutation = {
  __typename?: "Mutation";
  activate: ActivateUserResponse;
  addUser: AddUserResponse;
  login: LoginResponse;
  refresh: TokenRefreshResponse;
  addLink: AddLinkResponse;
};

export type MutationActivateArgs = {
  token: Scalars["String"];
};

export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationAddLinkArgs = {
  input: AddLinkInput;
};

export type ActivateUserResponse =
  | ActivationSuccessResponse
  | ActivationInvalidResponse;

export type ActivationSuccessResponse = {
  __typename?: "ActivationSuccessResponse";
  message: Scalars["String"];
};

export type ActivationInvalidResponse = {
  __typename?: "ActivationInvalidResponse";
  message: Scalars["String"];
};

export type AddUserResponse = UserSuccessResponse | UserEmailTakenResponse;

export type UserSuccessResponse = {
  __typename?: "UserSuccessResponse";
  message: Scalars["String"];
};

export type UserEmailTakenResponse = {
  __typename?: "UserEmailTakenResponse";
  message: Scalars["String"];
};

export type AddUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginResponse =
  | LoginSuccessResponse
  | LoginInvalidResponse
  | LoginUserInactiveResponse;

export type LoginSuccessResponse = {
  __typename?: "LoginSuccessResponse";
  token: Scalars["String"];
  expiryDate: Scalars["DateTime"];
  email: Scalars["String"];
  userId: Scalars["Float"];
};

export type LoginInvalidResponse = {
  __typename?: "LoginInvalidResponse";
  message: Scalars["String"];
};

export type LoginUserInactiveResponse = {
  __typename?: "LoginUserInactiveResponse";
  message: Scalars["String"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type TokenRefreshResponse =
  | TokenRefreshSuccessResponse
  | TokenRefreshFailureResponse;

export type TokenRefreshSuccessResponse = {
  __typename?: "TokenRefreshSuccessResponse";
  token: Scalars["String"];
  expiryDate: Scalars["DateTime"];
  email: Scalars["String"];
  userId: Scalars["Float"];
};

export type TokenRefreshFailureResponse = {
  __typename?: "TokenRefreshFailureResponse";
  message: Scalars["String"];
};

export type AddLinkResponse =
  | LinkSuccessResponse
  | LinkSlugTakenResponse
  | LinkIncorrectResponse;

export type LinkSuccessResponse = {
  __typename?: "LinkSuccessResponse";
  message: Scalars["String"];
  link: Scalars["String"];
};

export type LinkSlugTakenResponse = {
  __typename?: "LinkSlugTakenResponse";
  message: Scalars["String"];
};

export type LinkIncorrectResponse = {
  __typename?: "LinkIncorrectResponse";
  message: Scalars["String"];
};

export type AddLinkInput = {
  target: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
};

export type MeQueryVariables = {};

export type MeQuery = {__typename?: "Query"} & {
  me: {__typename?: "User"} & Pick<User, "id" | "email">;
};

export const MeDocument = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  );
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MeQuery,
    MeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<
  MeQuery,
  MeQueryVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: "UNION",
        name: "ActivateUserResponse",
        possibleTypes: [
          {
            name: "ActivationSuccessResponse",
          },
          {
            name: "ActivationInvalidResponse",
          },
        ],
      },
      {
        kind: "UNION",
        name: "AddUserResponse",
        possibleTypes: [
          {
            name: "UserSuccessResponse",
          },
          {
            name: "UserEmailTakenResponse",
          },
        ],
      },
      {
        kind: "UNION",
        name: "LoginResponse",
        possibleTypes: [
          {
            name: "LoginSuccessResponse",
          },
          {
            name: "LoginInvalidResponse",
          },
          {
            name: "LoginUserInactiveResponse",
          },
        ],
      },
      {
        kind: "UNION",
        name: "TokenRefreshResponse",
        possibleTypes: [
          {
            name: "TokenRefreshSuccessResponse",
          },
          {
            name: "TokenRefreshFailureResponse",
          },
        ],
      },
      {
        kind: "UNION",
        name: "AddLinkResponse",
        possibleTypes: [
          {
            name: "LinkSuccessResponse",
          },
          {
            name: "LinkSlugTakenResponse",
          },
          {
            name: "LinkIncorrectResponse",
          },
        ],
      },
    ],
  },
};
export default result;
