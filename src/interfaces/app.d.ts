import { LoadingType, TaskViewType } from './components.types';

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
}

export interface ITaskEstimate {
  id: string;
  value: string;
  label: string;
  icon: JSX.Element;
}

export interface ITaskAssignee {
  id: string | number;
  name: string;
  profileUrl: string;
}

export interface ITaskLabel {
  id: string;
  value: string;
  label: string;
}
