import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      dueDate
      pointEstimate
      status
      assignee {
        avatar
        id
        email
        fullName
        createdAt
        updatedAt
      }
      tags
    }
  }
`;
