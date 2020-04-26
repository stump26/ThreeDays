import React, { createContext, useEffect, useReducer, useState } from 'react';

import { onewayID } from '~/utils/hashid';
import { produce } from 'immer';

const defaultContext: ISubJobsContext = {
  isLoading: false,
  subJobsLists: undefined,
  loadSubJobLists: undefined,
  dispatchSubJobs: undefined,
};

const SubJobsContext = createContext(defaultContext);

const subJobReducer = (
  state: Array<ISubJobInfo> | undefined,
  action: SubJobActionTypes,
): Array<ISubJobInfo> => {
  switch (action.type) {
    case 'MAKE_ITEM':
      return produce(state || [], (draft) => {
        console.log('make_Item');
        const defualtSubJobForm: ISubJobInfo = {
          sJID: onewayID(9),
          jobName: '',
          sjck: false,
        };
        draft.push(defualtSubJobForm);
      });
    case 'CLEAR_ITEMS':
      return [];
    case 'MODIFY_SUB_JOBNAME':
      if (state) {
        return produce(state, (draft) => {
          const target: ISubJobInfo = draft.filter(
            (item) => item.sJID === `${action.JID}`,
          )[0];
          target.jobName = action.TEXT;
        });
      }
      return state || [];
    default:
      return state || [];
  }
};

const SubJobsContextProvider = ({ children }): React.ReactElement => {
  const [subJobsLists, dispatchSubJobs] = useReducer(subJobReducer, []);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadSubJobLists = (): void => {
    dispatchSubJobs({
      type: 'SET_LIST',
      value: [
        /* default value */
      ],
    });
  };

  useEffect(() => {
    loadSubJobLists();
  }, []);

  return (
    <SubJobsContext.Provider
      value={{ isLoading, subJobsLists, loadSubJobLists, dispatchSubJobs }}
    >
      {children}
    </SubJobsContext.Provider>
  );
};

export { SubJobsContextProvider, SubJobsContext };
