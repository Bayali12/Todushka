import { Notification } from './../components/Notification/index';
export type RootState = {
  isLoading: boolean;
  todos: Todo[];
  notifications: Notification[];
  searchTerm: string;
  hideCompleted: boolean;
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
};

type NotificationKind = 'error' | 'success';

export type Notification = {
  message: string;
  kind: NotificationKind;
};
