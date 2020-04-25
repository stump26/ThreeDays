interface ITodoInfo {
  JID: string;
  JName: string;
  sJIDs?: string[];
  GID?: string;
  SJCK: boolean;
  expireDate?: Date;
  note?: string;
}

interface ITodoContext {
  isLoading: boolean;
  todoLists: Array<ITodoInfo> | undefined;
  dispatchTodo: React.Dispatch<TodoActionTypes> | undefined;
}

type TodoActionTypes =
  | { type: 'TOGGLE_CHK'; JID: string }
  | { type: 'SET_LIST'; value: Array<ITodoInfo> | ITodoInfo }
  | { type: 'PUSH_LIST'; value: ITodoInfo };
