import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserContext } from '~/Context';
import { Login, Home } from '~/Screens';
import { Loading } from '~/Components';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ThreeHome" component={Home} />
    </Stack.Navigator>
  );
};

export default () => {
  const { isLoading, userInfo } = useContext<IUserContext>(UserContext);
  console.log('userInfo', userInfo);
  console.log('isLoading', isLoading);

  return (
    <SafeAreaProvider>
      {isLoading === false ? (
        <Loading />
      ) : (
        <NavigationContainer>
          {userInfo ? <HomeNavigator /> : <LoginNavigator />}
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
};
