interface ISubJobInfo {
  sJID: string;
  jobName: string;
  sjck: boolean;
}

interface ISubJobsContext {
  isLoading: boolean;
  subJobsLists?: Array<ISubJobInfo>;
  loadSubJobLists?: (JID: string) => void;
  dispatchSubJobs?: React.Dispatch<SubJobActionTypes>;
}

type SubJobActionTypes =
  | {
      type: 'SET_LIST';
      value: Array<IGoalInfo> | IGoalInfo;
    }
  | { type: 'MAKE_ITEM' }
  | { type: 'CLEAR_ITEMS' }
  | { type: 'MODIFY_SUB_JOBNAME'; JID: string; TEXT: string };
