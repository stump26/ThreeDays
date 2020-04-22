import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import {
  Text,
  TouchableOpacity,
  BackHandler,
  ToastAndroid,
} from 'react-native';

import { Button } from '~/Components/Button';
import { UserContext } from '~/Context/User';

type PageTypes = 'login' | 'signup';
interface Props {
  curPage?: PageTypes;
  handlePage: (page: PageTypes) => void;
}

const Cotainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomButton = styled(Button)`
  width: 62%;
  margin: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  border: none;
`;

const LocalLogin = styled(CustomButton)`
  background: #62e384;
`;

const GoogleLogin = styled(CustomButton)`
  background: #fff;
`;

const FacebookLogin = styled(CustomButton)`
  background: #3b5998;
`;

const KakaoLogin = styled(CustomButton)`
  background: #ffe812;
`;

const SignInBtnGroup = ({ handlePage }: Props) => {
  const { signInMethod } = useContext<IUserContext>(UserContext);
  return (
    <>
      <LocalLogin
        onPress={() => {
          signInMethod({ type: 'LOCAL' });
        }}
      >
        <Text style={{ color: '#FFF' }}>Email</Text>
      </LocalLogin>
      <GoogleLogin
        onPress={() => {
          signInMethod({ type: 'GOOGLE' });
        }}
      >
        <Text>
          <Text style={{ color: '#4285F4' }}>G</Text>
          <Text style={{ color: '#EA4335' }}>o</Text>
          <Text style={{ color: '#FBBC05' }}>o</Text>
          <Text style={{ color: '#4285F4' }}>g</Text>
          <Text style={{ color: '#34A853' }}>l</Text>
          <Text style={{ color: '#EA4335' }}>e</Text>
        </Text>
      </GoogleLogin>
      <FacebookLogin
        onPress={() => {
          signInMethod({ type: 'FACEBOOK' });
        }}
      >
        <Text style={{ color: '#FFF' }}>facebook</Text>
      </FacebookLogin>
      <KakaoLogin
        onPress={() => {
          signInMethod({ type: 'KAKAO' });
        }}
      >
        <Text style={{ color: '#000' }}>Kakao</Text>
      </KakaoLogin>

      <TouchableOpacity
        onPress={() => {
          handlePage('signup');
        }}
      >
        <Text style={{ color: '#ACACAC' }}>회원이 아니신가요? 회원가입</Text>
      </TouchableOpacity>
    </>
  );
};

const SignUpBtnGroup = () => {
  const { signUpMethod } = useContext<IUserContext>(UserContext);
  return (
    <>
      <LocalLogin
        onPress={() => {
          signUpMethod({ type: 'LOCAL' });
        }}
      >
        <Text style={{ color: '#FFF' }}>Email</Text>
      </LocalLogin>
      <GoogleLogin
        onPress={() => {
          signUpMethod({ type: 'GOOGLE' });
        }}
      >
        <Text>
          <Text style={{ color: '#4285F4' }}>G</Text>
          <Text style={{ color: '#EA4335' }}>o</Text>
          <Text style={{ color: '#FBBC05' }}>o</Text>
          <Text style={{ color: '#4285F4' }}>g</Text>
          <Text style={{ color: '#34A853' }}>l</Text>
          <Text style={{ color: '#EA4335' }}>e</Text>
        </Text>
      </GoogleLogin>
      <FacebookLogin
        onPress={() => {
          signUpMethod({ type: 'FACEBOOK' });
        }}
      >
        <Text style={{ color: '#FFF' }}>facebook</Text>
      </FacebookLogin>
      <KakaoLogin
        onPress={() => {
          signUpMethod({ type: 'KAKAO' });
        }}
      >
        <Text style={{ color: '#000' }}>Kakao</Text>
      </KakaoLogin>
    </>
  );
};

const LoginBtns = ({ curPage, handlePage }: Props) => {
  const [backTimer, setBackTimer] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [curPage]);

  let timerID = 0;
  const backAction = () => {
    if (curPage === 'signup') {
      handlePage('login');
    }
    return true;
  };
  return (
    <Cotainer>
      {curPage === 'login' ? (
        <SignInBtnGroup handlePage={handlePage} />
      ) : (
        <SignUpBtnGroup />
      )}
    </Cotainer>
  );
};

export default LoginBtns;
