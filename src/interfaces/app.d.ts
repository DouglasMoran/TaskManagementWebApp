import { LoadingType, TaskViewType } from './components.types';

export interface ModuleItem {
  id: string;
  name: string;
  icon: JSX.Element;
}

export interface ITask {
  id: string | number;
  title: string;
  points: Pick<ITaskEstimate, 'id' | 'value'>;
  member: ITaskAssignee;
  labels: ITaskLabel[];
  date: Date;
}

export interface TaskState {
  loading: LoadingType;
  data?: any | null;
  errorMessage: string;
  viewType: TaskViewType;
  searchQuery: string;
  task: ITask | null;
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
