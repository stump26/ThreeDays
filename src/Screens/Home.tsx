import React, { useContext, useState } from 'react';
import {
  GestureResponderEvent,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { UserContext } from '~/Context/User';
import GoalBox from '~/Components/GoalBox';
import TodoBox from '~/Components/TodoBox';
import { FloatPlusButton } from '~/Components/Button';
import { PopUpMenu, PopUpOption } from '~/Components/PopUpMenu';
import { TodoContextProvider } from '~/Context/Todo';
import { GoalContextProvider } from '~/Context/Goal';

type NavigationProp = StackNavigationProp<AppNaviParamList, 'Home'>;
interface Props {
  navigation: NavigationProp;
}

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background: #f7f7f7;
  overflow: scroll;
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
const ScrollableList = styled.ScrollView`
  flex: 1;
  flex-direction: column;
`;

const AddButton = styled(FloatPlusButton)`
  position: absolute;
  bottom:0
  align-self: flex-end;
`;

const Home = ({ navigation }: Props) => {
  const { logout } = useContext<IUserContext>(UserContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCoord, setPopupCoord] = useState({ x: 0, y: 0 });

  const showPopupMenu = (event: GestureResponderEvent) => {
    setPopupCoord({
      x: Dimensions.get('window').width - event.nativeEvent.pageX,
      y: Dimensions.get('window').height - event.nativeEvent.pageY,
    });
    console.log(popupCoord);
    setPopupVisible(true);
  };
  const hidePopupMenu = () => {
    setPopupVisible(false);
  };

  const handleOnPressOption = (target: keyof AppNaviParamList) => {
    navigation.navigate(target);
  };

  return (
    <Container>
      <Header>
        <DayIndecator>
          <Title>Today</Title>
          <DetailDate>2020년 4월 3일 금요일</DetailDate>
        </DayIndecator>
      </Header>

      <ScrollableList>
        <GoalContextProvider>
          <GoalBox />
        </GoalContextProvider>

        <TodoContextProvider>
          <TodoBox />
        </TodoContextProvider>
      </ScrollableList>

      <AddButton
        size={{ width: 60, height: 60 }}
        pos={{ right: 15, bottom: 15 }}
        handlePopupMenu={showPopupMenu}
      />
      {popupVisible && (
        <PopUpMenu
          isVisible={popupVisible}
          coord={popupCoord}
          handlePopupMenu={hidePopupMenu}
        >
          <PopUpOption
            handleOnPressOption={handleOnPressOption}
            name="writeGoal"
          >
            목표 생성
          </PopUpOption>
          <PopUpOption
            handleOnPressOption={handleOnPressOption}
            name="writeTodo"
          >
            작업 추가
          </PopUpOption>
        </PopUpMenu>
      )}

      <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
