import { BackHandler, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { Button } from '~/components/shared/Button';
import { UserContext } from '~/Context/User';
import styled from 'styled-components/native';

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

const SignInBtnGroup = ({ handlePage }: Props): React.ReactElement => {
  const { signInMethod } = useContext<IUserContext>(UserContext);
  return (
    <>
      <LocalLogin
        testID="btn-local-sign-in"
        onPress={(): void => {
          signInMethod({ type: 'LOCAL' });
        }}
      >
        <Text style={{ color: '#FFF' }}>Email</Text>
      </LocalLogin>
      <GoogleLogin
        testID="btn-google-sign-in"
        onPress={(): void => {
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
        testID="btn-facebook-sign-in"
        onPress={(): void => {
          signInMethod({ type: 'FACEBOOK' });
        }}
      >
        <Text style={{ color: '#FFF' }}>facebook</Text>
      </FacebookLogin>
      <KakaoLogin
        testID="btn-kakao-sign-in"
        onPress={(): void => {
          signInMethod({ type: 'KAKAO' });
        }}
      >
        <Text style={{ color: '#000' }}>Kakao</Text>
      </KakaoLogin>

      <TouchableOpacity
        testID="btn-sign-up"
        onPress={(): void => {
          handlePage('signup');
        }}
      >
        <Text style={{ color: '#ACACAC' }}>회원이 아니신가요? 회원가입</Text>
      </TouchableOpacity>
    </>
  );
};

const SignUpBtnGroup = (): React.ReactElement => {
  const { signUpMethod } = useContext<IUserContext>(UserContext);
  return (
    <>
      <LocalLogin
        testID="btn-local-sign-up"
        onPress={(): void => {
          signUpMethod({ type: 'LOCAL' });
        }}
      >
        <Text style={{ color: '#FFF' }}>Signup with Email</Text>
      </LocalLogin>
      <GoogleLogin
        testID="btn-google-sign-up"
        onPress={(): void => {
          signUpMethod({ type: 'GOOGLE' });
        }}
      >
        <Text>
          <Text style={{ color: '#000' }}>Signup with </Text>
          <Text style={{ color: '#4285F4' }}>G</Text>
          <Text style={{ color: '#EA4335' }}>o</Text>
          <Text style={{ color: '#FBBC05' }}>o</Text>
          <Text style={{ color: '#4285F4' }}>g</Text>
          <Text style={{ color: '#34A853' }}>l</Text>
          <Text style={{ color: '#EA4335' }}>e</Text>
        </Text>
      </GoogleLogin>
      <FacebookLogin
        testID="btn-facebook-sign-up"
        onPress={(): void => {
          signUpMethod({ type: 'FACEBOOK' });
        }}
      >
        <Text style={{ color: '#FFF' }}>Signup with facebook</Text>
      </FacebookLogin>
      <KakaoLogin
        testID="btn-kakao-sign-up"
        onPress={(): void => {
          signUpMethod({ type: 'KAKAO' });
        }}
      >
        <Text style={{ color: '#000' }}>Signup with Kakao</Text>
      </KakaoLogin>
    </>
  );
};

const LoginBtns = ({ curPage, handlePage }: Props): React.ReactElement => {
  const backAction = (): boolean => {
    if (curPage === 'signup') {
      handlePage('login');
    }
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return (): void => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [curPage]);

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
