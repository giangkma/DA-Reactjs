export interface ITodoList {
  name: string;
  age: number;
  id: string;
}

export enum TaskActionTypes {
  EDIT = "EDIT",
  DELETE = "DELETE",
}
