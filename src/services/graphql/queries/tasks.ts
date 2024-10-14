import { gql } from '@apollo/client';

export const GET_ALL_TASK = gql`
  query GetAllTasks {
    tasks(input: {}) {
      id
      name
      status
      pointEstimate
      dueDate
      tags
      assignee {
        fullName
        email
        id
      }
    }
  }
`;
