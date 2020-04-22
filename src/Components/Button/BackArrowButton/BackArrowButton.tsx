import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

import { IC_LEFT_ARROW } from '~/Utils/svg';

interface Props {
  onPress?: (event?: GestureResponderEvent) => void;
}

const BackBtnContainer = styled.TouchableOpacity`
  padding-left: 15px;
`;

const BackArrowButton: React.FC<Props> = ({ onPress }) => {
  return (
    <BackBtnContainer onPress={onPress ? onPress : undefined}>
      <IC_LEFT_ARROW />
    </BackBtnContainer>
  );
};

export default BackArrowButton;
