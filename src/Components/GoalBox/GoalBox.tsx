import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';

import { IC_PLUS } from '~/Utils/svg';

const GoalContainer = styled.View`
  margin: 0 28px;
  min-height: 230px;
`;

const H3 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

const GoalCard = styled.View``;

const EmptyListContainer = styled.TouchableOpacity`
  flex: 1;
  background: #ffffff;
  margin: 8px 0;
  box-shadow: 0 5px 15px #000;
  elevation: 6;
  justify-content: space-evenly;
  align-items: center;
`;

const EmptyGoal = () => {
  return (
    <EmptyListContainer>
      <H3>목표가 비어있어요{'\n'}목표를 추가해봐요</H3>
      <IC_PLUS />
    </EmptyListContainer>
  );
};

const GoalList = () => {
  return <GoalCard />;
};

const GoalBox = () => {
  const [goalList, setGolaList] = useState([]);

  return (
    <GoalContainer>
      <H3>목표</H3>
      {goalList.length === 0 ? <EmptyGoal /> : <GoalList />}
    </GoalContainer>
  );
};

export default GoalBox;
