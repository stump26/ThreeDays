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
  getTodoInfo: () => void;
}
