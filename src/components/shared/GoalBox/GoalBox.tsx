import React, { useContext, useState } from 'react';

import CardView from '~/components/shared/CardView';
import { GoalContext } from '~/Context/Goal';
import { IC_PLUS } from '~/utils/svg';
import ProgressStatus from '~/components/shared/ProgressStatus';
import Styled from 'styled-components/native';

const GoalContainer = Styled.View`
  margin: 0 28px;
`;

const H3 = Styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

const EmptyListContainer = Styled.TouchableOpacity`
  flex: 1;
  min-height: 230px;
  background: #ffffff;
  margin: 8px 0;
  box-shadow: 0 5px 15px #000;
  elevation: 6;
  justify-content: space-evenly;
  align-items: center;
`;

const CardContainer = Styled(CardView)`
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = Styled.View`
  flex-direction:row;
`;
const Body = Styled.View`
  position:relative;
  top:-5px;
`;
const RelatedBranchContainer = Styled.View`
  flex:1;
  padding:3px 5px;
  justify-content:flex-end;
  flex-direction:row;
`;
const RelatedBranchName = Styled.Text`
  padding-right:4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 11px;
  margin-left:auto;
`;
const BranchColorIndicator = Styled.View<{ color?: string }>`
  width: 8px;
  height: 8px;
  background:${({ color }): string => `${color}`}
  border-radius: 4px;
`;

const EmptyGoal = (): React.ReactElement => {
  return (
    <EmptyListContainer>
      <H3>목표가 비어있어요{'\n'}목표를 추가해봐요</H3>
      <IC_PLUS />
    </EmptyListContainer>
  );
};

const GoalCard = ({ item }: { item: IGoalInfo }): React.ReactElement => {
  return (
    <CardContainer>
      <CardHeader>
        <RelatedBranchContainer>
          <RelatedBranchName>Javascript</RelatedBranchName>
          <BranchColorIndicator color="#487BFF" />
        </RelatedBranchContainer>
      </CardHeader>
      <Body>
        <H3>{item.GName}</H3>
      </Body>
      <ProgressStatus Values={[true, true, false]} />
    </CardContainer>
  );
};

const GoalList = ({ list }: { list: Array<IGoalInfo> }): React.ReactElement => {
  return (
    <>
      {list?.map((item) => (
        <GoalCard key={item.GID} item={item} />
      ))}
    </>
  );
};

const GoalBox = (): React.ReactElement => {
  const { goalLists } = useContext<IGoalContext>(GoalContext);

  console.log('GoalBox -> goalLists?.length', goalLists?.length);
  return (
    <GoalContainer>
      <H3>목표</H3>
      {goalLists === undefined || goalLists.length === 0 ? (
        <EmptyGoal />
      ) : (
        <GoalList list={goalLists} />
      )}
    </GoalContainer>
  );
};

export default GoalBox;
