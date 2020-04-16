import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

import { UserContext } from '~/Context/User';
import { GoalBox, TodoBox } from '~/Components';
import { FloatPlusButton } from '~/Components/Button';

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background: #f7f7f7;
`;
const H3 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
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

const AddButton = styled(FloatPlusButton)`
  position: absolute;
  bottom:0
  align-self: flex-end;
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

      <GoalBox />

      <TodoBox />

      <AddButton size={{ width: 40, height: 40 }} pos={{ right: 15, bottom: 15 }} />
      {/* <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity> */}
    </Container>
  );
};

export default Home;
