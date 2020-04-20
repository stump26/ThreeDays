interface IGoalInfo {
  GID: number;
  GName: string;
  BID: number;
  setDate: Date;
  expireDate: Date;
}

interface IGoalContext {
  isLoading: boolean;
  goalLists: Array<IGoalInfo> | undefined;
  dispatchGoal: React.Dispatch<GoalActionTypes> | undefined;
}

type GoalActionTypes = {
  type: 'SET_LIST';
  value: Array<IGoalInfo> | IGoalInfo;
};
