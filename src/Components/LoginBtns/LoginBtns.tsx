import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

import Button from '~/Components/Button';
import { UserContext } from '~/Context/User';

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

const LoginBtns = () => {
  const { loginMethod } = useContext<IUserContext>(UserContext);
  return (
    <Cotainer>
      <LocalLogin
        onPress={() => {
          loginMethod({ type: 'LOCAL' });
        }}
      >
        <Text style={{ color: '#FFF' }}>Email</Text>
      </LocalLogin>
      <GoogleLogin
        onPress={() => {
          loginMethod({ type: 'GOOGLE' });
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
          loginMethod({ type: 'FACEBOOK' });
        }}
      >
        <Text style={{ color: '#FFF' }}>facebook</Text>
      </FacebookLogin>
      <KakaoLogin
        onPress={() => {
          loginMethod({ type: 'KAKAO' });
        }}
      >
        <Text style={{ color: '#000' }}>Kakao</Text>
      </KakaoLogin>
      <TouchableOpacity>
        <Text style={{ color: '#ACACAC' }}>회원이 아니신가요? 회원가입</Text>
      </TouchableOpacity>
    </Cotainer>
  );
};

export default LoginBtns;
