import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserContext } from '~/Context';
import { Login, Home, GoalEdit } from '~/Screens';
import { Loading } from '~/Components';
import { IC_LEFT_ARROW } from '~/Utils/svg';

const BackBtnContainer = styled.TouchableOpacity`
  padding-left: 15px;
`;

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ThreeHome"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: '',
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="writeGoal"
        component={GoalEdit}
        options={{
          title: '목표 설정',
          headerLeft: () => {
            return (
              <BackBtnContainer>
                <IC_LEFT_ARROW />
              </BackBtnContainer>
            );
          },
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
