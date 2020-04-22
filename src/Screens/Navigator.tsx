import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserContext } from '~/Context';
import { Login, Home, GoalEdit, TodoEdit } from '~/Screens';
import { Loading } from '~/Components';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const AppNavigator = ({}) => {
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

export default () => {
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
