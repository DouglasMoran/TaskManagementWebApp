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
}
