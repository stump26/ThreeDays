import { GoalEdit, Home, Login, TodoEdit } from '~/components/screen';
import React, { useContext } from 'react';

import { Loading } from '~/Components/shared';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserContext } from '~/Context';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="ThreeHome"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="writeGoal"
        component={GoalEdit}
        options={{
          title: '목표 설정',
        }}
      />
      <Stack.Screen
        name="writeTodo"
        component={TodoEdit}
        options={{
          title: '작업추가',
        }}
      />
    </Stack.Navigator>
  );
};

const RootStackNavigator = (): JSX.Element => {
  const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {userInfo ? <AppNavigator /> : <LoginNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootStackNavigator;
