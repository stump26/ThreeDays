import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { IC_SM_CHKBOX_ON, IC_SM_CHKBOX_OFF } from '~/Utils/svg';

const Container = styled.View`
  flex-direction: row;
  min-height: 20px;
`;

const OnCheckerBackground = styled.View`
  flex: 1;
  background: #08d194;
  align-items: center;
  justify-content: center;
  border-color: #e4e4e4;
  border-left-width: 0.3px;
  border-right-width: 0.3px;
`;
const OffCheckerBackground = styled.View`
  flex: 1;
  background: #e4e4e4;
  align-items: center;
  justify-content: center;
`;

const ProgressChecker = ({ value }: { value: boolean }) => {
  if (value) {
    return (
      <OnCheckerBackground>
        <IC_SM_CHKBOX_ON />
      </OnCheckerBackground>
    );
  } else {
    return (
      <OffCheckerBackground>
        <IC_SM_CHKBOX_OFF />
      </OffCheckerBackground>
    );
  }
};

const ProgressStatus: React.SFC<{ Values: Array<boolean> }> = ({ Values }) => {
  return (
    <Container>
      {Values.map((value, index) => (
        <ProgressChecker key={`Status${index}`} value={value} />
      ))}
    </Container>
  );
};

export default ProgressStatus;
