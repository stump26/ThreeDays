import { GestureResponderEvent } from 'react-native';
import { IC_LEFT_ARROW } from '~/utils/svg';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPress?: (event?: GestureResponderEvent) => void;
}

const BackBtnContainer = styled.TouchableOpacity`
  padding-left: 15px;
`;

const BackArrowButton: React.FC<Props> = ({ onPress }) => {
  return (
    <BackBtnContainer onPress={onPress || undefined}>
      <IC_LEFT_ARROW />
    </BackBtnContainer>
  );
};

export default BackArrowButton;
