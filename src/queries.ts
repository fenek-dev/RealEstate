import {gql} from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation SignupUser($input: CreateUserInput!) {
    createUser(payload: $input) {
      _id,
      name,
      type,
      phone,
      token
    }
  }
`
