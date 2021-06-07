import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!) {
    createUser(data: { email: $email, name: $name }) {
      name
      email
    }
  }
`;
