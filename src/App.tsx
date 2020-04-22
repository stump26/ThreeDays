import React, { useState, useEffect } from 'react';
import { StatusBar, ToastAndroid, BackHandler } from 'react-native';
import Navigator from '~/Screens/Navigator';
import { UserContextProvider } from '~/Context/User';

const App = () => {
  const [backTimer, setBackTimer] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  let timerID = 0;

  const backAction = () => {
    if (backTimer === false && timerID === 0) {
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      setBackTimer(true);
      timerID = setTimeout(() => {
        setBackTimer(false);
        timerID = 0;
      }, 300);
    } else {
      clearTimeout(timerID);
      BackHandler.exitApp(); // 앱 종료
    }

    return true;
  };

  return (
    <>
      <UserContextProvider>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </UserContextProvider>
    </>
  );
};

export default App;
