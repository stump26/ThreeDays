import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { UserContext } from '~/Context/User';

const Container = styled.View`
  background: #f7f7f7;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DayIndecator = styled.View`
  margin: 5px 20px;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #00df9b;
`;
const DetailDate = styled.Text`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  text-align: center;
  color: #000;
`;
const GoalContainer = styled.View`
  margin: 5px 28px;
`;
const TodoContainer = styled.View`
  margin: 5px 28px;
`;
const H3 = styled.Text`
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;
const ShadowBlockView = styled.View`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Home = () => {
  const { logout } = useContext<IUserContext>(UserContext);
  return (
    <Container>
      <Header>
        <DayIndecator>
          <Title>Today</Title>
          <DetailDate>2020년 4월 3일 금요일</DetailDate>
        </DayIndecator>
      </Header>
      <GoalContainer>
        <H3>목표</H3>
        <ShadowBlockView>
          <H3>목표가 비어있어요 목표를 추가해봐요</H3>
        </ShadowBlockView>
      </GoalContainer>
      <TodoContainer>
        <H3>To-do</H3>
      </TodoContainer>
      <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
