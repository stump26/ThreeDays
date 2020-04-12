import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { ImgBackground, LoginBtns } from '~/Components';

type PageTypes = 'login' | 'signup';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  height: auto;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

const LoginTitle = styled.Text`
  align-self: flex-end;
  width: 270px;
  margin-right: 30px;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  color: #ffffff;
`;

const Login = () => {
  const [page, setPage] = useState<PageTypes>('login');
  return (
    <SafeContainer>
      <ImgBackground src={require('~/assets/images/login_bg.jpg')}>
        <Container>
          <LoginTitle>Hello. Welcome to ThreeDays.</LoginTitle>
          <LoginBtns curPage={page} handlePage={setPage} />
        </Container>
      </ImgBackground>
    </SafeContainer>
  );
};

export default Login;
