import React, { createContext, useState } from 'react';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const defaultContext: ITodoContext = {
  isLoading: false,
  todoLists: undefined,
  getTodoInfo: () => {},
};

const DEV_TODO_DUMI: Array<ITodoInfo> = [
  {
    JID: 11111,
    JName: '컴퓨터 구조 과제',
    SJCK: false,
    expireDate: new Date('2020-04-17T14:30:00'),
    note: '문제풀기',
  },
  {
    JID: 11121,
    JName: '무팔기',
    SJCK: false,
    expireDate: new Date('2020-04-17T00:23:00'),
    note: '150벨넘으면 바로팔아야겠다',
  },
];

const TodoContext = createContext(defaultContext);

const TodoContextProvider = ({ children }: Props) => {
  const [todoLists, setTodoLists] = useState<Array<ITodoInfo> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTodoInfo = () => {
    setTodoLists(DEV_TODO_DUMI);
  };

  return (
    <TodoContext.Provider value={{ isLoading, todoLists, getTodoInfo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
