import { ThemeProvider, ThemeType } from '@dooboo-ui/native-theme';
import { dark, light } from '../theme';

import BackActionProvider from './BackActionProvider';
import { GoalContextProvider } from '~/Context/Goal';
import React from 'react';
import { TodoContextProvider } from '~/Context/Todo';
import { UserContextProvider } from '~/Context/User';

interface Props {
  initialThemeType?: ThemeType;
  children?: React.ReactElement;
}

// Add providers here
const RootProvider = ({
  initialThemeType = ThemeType.LIGHT,
  children,
}: Props): React.ReactElement => {
  return (
    <ThemeProvider
      initialThemeType={initialThemeType}
      customTheme={{ light, dark }}
    >
      <UserContextProvider>
        <GoalContextProvider>
          <TodoContextProvider>
            <BackActionProvider>{children}</BackActionProvider>
          </TodoContextProvider>
        </GoalContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
