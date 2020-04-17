interface ITodoInfo {
  JID: number;
  JName: string;
  SJCK: boolean;
  expireDate: Date | undefined;
  note: string | undefined;
}

interface ITodoContext {
  isLoading: boolean;
  todoLists: Array<ITodoInfo> | undefined;
  dispatchTodo: React.Dispatch<ActionTypes> | undefined;
}

type ActionTypes =
  | { type: 'TOGGLE_CHK'; JID: number }
  | { type: 'SET_LIST'; value: Array<ITodoInfo> | ITodoInfo };
