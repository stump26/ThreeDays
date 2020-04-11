import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserContext } from '~/Context';
import { Login, Home } from '~/Screens';
import { Loading } from '~/Components';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'ThreeDays',
          headerTransparent: true,
          headerTintColor: '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ThreeHome" component={Home} />
    </Stack.Navigator>
  );
};

export default () => {
  const { isLoading, userInfo } = useContext<IUserContext>(UserContext);
  console.log('userInfo', userInfo);
  console.log('isLoading', isLoading);

  if (isLoading === false) {
    return <Loading />;
  }
  return (
    <NavigationContainer>{userInfo ? <HomeNavigator /> : <LoginNavigator />}</NavigationContainer>
  );
};
