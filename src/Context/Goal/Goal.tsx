import React, { createContext, useState, useReducer, useEffect } from 'react';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const defaultContext: IGoalContext = {
  isLoading: false,
  goalLists: undefined,
  dispatchGoal: undefined,
};

const DEV_GOAL_DUMI: Array<IGoalInfo> = [
  {
    GID: 1111,
    GName: '자바스크립트 공부하기',
    BID: 111,
    setDate: new Date('2020-04-16'),
    expireDate: new Date('2020-04-18'),
  },
];

const GoalContext = createContext(defaultContext);

const goalReducer = (
  state: Array<IGoalInfo> | undefined,
  action: GoalActionTypes,
) => {
  switch (action.type) {
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

const GoalContextProvider = ({ children }: Props) => {
  const [goalLists, dispatchGoal] = useReducer(goalReducer, []);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initGoalInfo = () => {
    dispatchGoal({ type: 'SET_LIST', value: DEV_GOAL_DUMI });
  };

  useEffect(() => {
    initGoalInfo();
  }, []);

  return (
    <GoalContext.Provider value={{ isLoading, goalLists, dispatchGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export { GoalContextProvider, GoalContext };
