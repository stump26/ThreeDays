import { ThemeProvider, ThemeType } from '@dooboo-ui/native-theme';
import { dark, light } from '../theme';

import BackActionProvider from './BackActionProvider';
import React from 'react';
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
        <BackActionProvider>{children}</BackActionProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
