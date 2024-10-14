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

export const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
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
        type
        createdAt
        updatedAt
      }
      tags
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
      name
      status
    }
  }
`;
