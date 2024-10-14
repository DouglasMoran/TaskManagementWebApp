import { TaskViewType } from './components.types';

// Status for Task
export type COLUMN_TASK_STATUS = {
  BACKLOG: 'Backlog';
  TODO: 'Todo';
  IN_PROGRESS: 'In progress';
  DONE: 'Done';
  CANCELLED: 'Cancelled';
};

export type ColumnTaskStatusKeys = keyof COLUMN_TASK_STATUS;

export type ColumnTaskStatusValues = COLUMN_TASK_STATUS[ColumnTaskStatusKeys];

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
  status: ColumnTaskStatusKeys;
  tags: TaskTag[];
  date: Date;
}

export interface ICreateTaskInput {
  assigneeId: string;
  dueDate: Date;
  name: string;
  pointEstimate: TaskPointEstimate;
  status: ColumnTaskStatusKeys;
  tags: TaskTag[];
}

export interface IUpdateTaskInput extends ICreateTaskInput {
  id: string;
}

export type PopoverType<V, K = string> = {
  label: K;
  value: V;
};

export interface ModuleItem {
  id: string;
  name: string;
  icon: JSX.Element;
}

export interface TaskState {
  viewType: TaskViewType;
  searchQuery: string;
  task: ITask | null;
  columnTaskStatus: ITaskStatusSections[];
  allowRefreshTasks: boolean;
  isTaskModalOpen: boolean;
  isTaskUpdate: boolean;
  // query keys
  profile: IUser | null;
  users: IUser[] | null;
}

export interface ITaskStatusSections {
  id: ColumnTaskStatusKeys;
  title: ColumnTaskStatusValues;
  tasks: ITask[] | null;
}
