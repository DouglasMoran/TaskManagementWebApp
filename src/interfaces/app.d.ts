import { LoadingType, TaskViewType } from './components.types';

export type PopoverType<T> = {
  label: string;
  value: T;
};

// Status for Task
export type TaskStatus =
  | 'BACKLOG'
  | 'CANCELLED'
  | 'DONE'
  | 'IN_PROGRESS'
  | 'TODO';

// Estimate point for a task
export type TaskPointEstimate = 'EIGHT' | 'FOUR' | 'ONE' | 'TWO' | 'ZERO';

// Enum for tags for tasks
export type TaskTag = 'ANDROID' | 'IOS' | 'NODE_JS' | 'RAILS' | 'REACT';

export type UserType = 'ADMIN' | 'CANDIDATE';

export interface IUser {
  avatar: string | null;
  createdAt?: Date;
  email: string;
  fullName: string;
  id: string;
  type: UserType;
  updatedAt?: Date;
}

export interface ITask {
  // Original Task keys
  assignee: IUser | null;
  createdAt: Date;
  creator: IUser;
  dueDate: Date;
  id: string;
  name: string;
  pointEstimate: PopoverType<TaskPointEstimate> | null;
  position: number;
  status: TaskStatus;
  tags: TaskTag[];
  date: Date;
}

export interface ModuleItem {
  id: string;
  name: string;
  icon: JSX.Element;
}

export interface TaskState {
  loading: LoadingType;
  data?: any | null;
  errorMessage: string;
  viewType: TaskViewType;
  searchQuery: string;
  task: ITask | null;
  taskStatusSections: ITaskStatusSections[] | null;
  isTaskModalOpen: boolean;
  isTaskUpdate: boolean;
  // Tmp use for updating task
  taskSectionIdSelected: string;
  // query keys
  users: IUser[] | null;
}

export interface ITaskEstimate {
  id: string;
  value: string;
  label: string;
  icon: JSX.Element;
}

export interface ITaskAssignee {
  id: string;
  name: string;
  profileUrl: string;
}

export interface ITaskLabel {
  id: string;
  value: string;
  label: string;
}

export interface ITaskStatusSections {
  id: string;
  title: string;
  tasks: ITask[] | null;
}
