import React, { createContext, useState, useReducer, useEffect } from 'react';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const defaultContext: ITodoContext = {
  isLoading: false,
  todoLists: undefined,
  dispatchTodo: undefined,
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
  {
    JID: 11131,
    JName: '무팔기2',
    SJCK: false,
    expireDate: new Date('2020-04-17T00:23:00'),
    note: '150벨넘으면 바로팔아야겠다',
  },
  {
    JID: 11141,
    JName: '무팔기3',
    SJCK: false,
    expireDate: new Date('2020-04-17T00:23:00'),
    note: '150벨넘으면 바로팔아야겠다',
  },
  {
    JID: 11151,
    JName: '무팔기4',
    SJCK: false,
    expireDate: new Date('2020-04-17T00:23:00'),
    note: '150벨넘으면 바로팔아야겠다',
  },
];

const TodoContext = createContext(defaultContext);

const todoReducer = (
  state: Array<ITodoInfo> | undefined,
  action: TodoActionTypes,
) => {
  switch (action.type) {
    case 'TOGGLE_CHK':
      if (
        state?.some((v) => {
          if (v.JID === action.JID) {
            v.SJCK = !v.SJCK;
          }
          return v.JID === action.JID;
        })
      ) {
        return [...state];
      }
      throw new Error('JID not founded');
    case 'SET_LIST':
      if (state !== undefined) {
        if (action.value instanceof Array) {
          return [...state, ...action.value];
        }
        return [...state, action.value];
      }
      if (action.value instanceof Array) {
        return [...action.value];
      }
      return [action.value];
    default:
      throw new Error('Unhandled action');
  }
};

const TodoContextProvider = ({ children }: Props) => {
  const [todoLists, dispatchTodo] = useReducer(todoReducer, []);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTodoInfo = () => {
    dispatchTodo({ type: 'SET_LIST', value: DEV_TODO_DUMI });
  };

  useEffect(() => {
    getTodoInfo();
  }, []);

  return (
    <TodoContext.Provider value={{ isLoading, todoLists, dispatchTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
