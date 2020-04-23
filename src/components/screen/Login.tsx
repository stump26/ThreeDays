import { ImgBackground, LoginBtns } from '~/components/shared';
import React, { useState } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';

type PageTypes = 'login' | 'signup';
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

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

const Login = ({ navigation }: Props): JSX.Element => {
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
