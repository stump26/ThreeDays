import React, { useState } from 'react';
import Styled from 'styled-components/native';

import { BranchSelector } from '~/Components';
import { Button } from '~/Components/Button';
import { IC_SM_CHKBOX_OFF, IC_SM_CHKBOX_ON } from '~/Utils/svg';

interface CheckerProps {
  value: boolean;
  width?: number;
  height?: number;
  handlePress: () => void;
}
const Container = Styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
`;

const OKButton = Styled(Button)`
  width: 97%;
  background:#00DF9B;
  margin:5px 5px;
  margin-bottom:auto;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  border:none;
`;
const BtnLabel = Styled.Text``;
const CustomBranchSelector = Styled(BranchSelector)`
  width:80%;
`;
const BranchRelator = Styled.View`
  width:95%;
  margin-bottom:25px;
  flex-direction:row;
  align-items:center;
`;

const ForkCheckerContainer = Styled.View`
  flex-basis:22%;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
`;

const ForkChkLabel = Styled.Text`
  margin:auto 0;
  color: #979797;
  font-weight:bold;
  font-size: 18px;
  line-height: 26px;
`;

const EditFormBody = Styled.View`
  flex:1;
  margin:20px 0;
  width: 85%;
  align-items:center;
`;

const InputField = Styled.TextInput.attrs(() => ({
  placeholderTextColor: '#979797',
}))`
  width:95%;
  border-bottom-width:1px;
  border-bottom-color:#000;
  font-size: 24px;
  line-height: 28px;
`;

const GoalNameField = Styled(InputField)`
  margin-bottom:15px;
`;

const CheckerContainer = Styled.TouchableWithoutFeedback`
  padding:0 5px;
  justify-content:center;
  align-items:center;
`;

const MemoField = Styled.TextInput.attrs(() => ({
  multiline: true,
  placeholderTextColor: '#B3B3B3',
}))`
  width:95%;
  background: #F7F7F7;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
  align-items:flex-start;
`;

const Checker: React.SFC<CheckerProps> = ({
  value,
  handlePress,
  width = 20,
  height = 20,
}) => {
  return (
    <CheckerContainer onPress={handlePress}>
      {value ? (
        <IC_SM_CHKBOX_ON fill="#979797" width={width} height={height} />
      ) : (
        <IC_SM_CHKBOX_OFF fill="#979797" width={width} height={height} />
      )}
    </CheckerContainer>
  );
};

const GoalEdit: React.SFC = () => {
  const [goalName, setGoalName] = useState('');
  const [forkChecker, setForkChecker] = useState(false);
  const [goalMemo, setGoalMemo] = useState('');

  const handleForkStatus = () => {
    setForkChecker(!forkChecker);
  };

  return (
    <Container>
      <EditFormBody>
        <GoalNameField
          placeholder="목표"
          onChangeText={(text) => setGoalName(text)}
          value={goalName}
        />
        <BranchRelator>
          <CustomBranchSelector onValueChange={(value) => console.log(value)} />
          <ForkCheckerContainer>
            <Checker
              value={forkChecker}
              handlePress={handleForkStatus}
              width={22}
              height={22}
            />
            <ForkChkLabel>fork</ForkChkLabel>
          </ForkCheckerContainer>
        </BranchRelator>

        <MemoField
          numberOfLines={7}
          onChangeText={(text) => setGoalMemo(text)}
          placeholder="메모를 입력하세요"
          value={goalMemo}
        />
      </EditFormBody>
      <OKButton>
        <BtnLabel style={{ color: '#fff' }}>확인</BtnLabel>
      </OKButton>
    </Container>
  );
};

export default GoalEdit;
