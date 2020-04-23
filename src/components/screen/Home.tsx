import {
  Dimensions,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import { PopUpMenu, PopUpOption } from '~/components/shared/PopUpMenu';
import React, { useContext, useState } from 'react';

import { FloatPlusButton } from '~/components/shared/Button';
import GoalBox from '~/components/shared/GoalBox';
import { GoalContextProvider } from '~/Context/Goal';
import { StackNavigationProp } from '@react-navigation/stack';
import TodoBox from '~/components/shared/TodoBox';
import { TodoContextProvider } from '~/Context/Todo';
import { UserContext } from '~/Context/User';
import styled from 'styled-components/native';

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
  width: 60px;
  height: 60px;
  right: 15px;
  bottom: 15px;
  position: absolute;
  bottom: 0;
  align-self: flex-end;
`;

const Home = ({ navigation }: Props): React.ReactElement => {
  const { logout } = useContext<IUserContext>(UserContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupCoord, setPopupCoord] = useState({ x: 0, y: 0 });

  const showPopupMenu = (event: GestureResponderEvent): void => {
    setPopupCoord({
      x: Dimensions.get('window').width - event.nativeEvent.pageX,
      y: Dimensions.get('window').height - event.nativeEvent.pageY,
    });
    console.log(popupCoord);
    setPopupVisible(true);
  };
  const hidePopupMenu = (): void => {
    setPopupVisible(false);
  };

  const handleOnPressOption = (target: keyof AppNaviParamList): void => {
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

      <AddButton handlePopupMenu={showPopupMenu} />
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
