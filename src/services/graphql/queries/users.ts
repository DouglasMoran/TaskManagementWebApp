import { gql } from '@apollo/client';

// Query to get the current user's profile
export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      id
      fullName
      email
      avatar
      type
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      fullName
      email
      avatar
      type
    }
  }
`;
