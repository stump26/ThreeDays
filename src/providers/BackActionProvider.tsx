import { BackHandler, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';

interface Props {
  children?: React.ReactElement;
}

function BackActionProvider({ children }: Props): React.ReactElement {
  const [backTimer, setBackTimer] = useState(false);

  let timerID = 0;
  const backAction = (): boolean => {
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
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return (): void => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return <>{children}</>;
}

export default BackActionProvider;
