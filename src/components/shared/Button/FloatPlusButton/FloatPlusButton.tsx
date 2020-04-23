import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import { IC_PLUS } from '~/utils/svg';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  style?: StyleProp<ViewStyle>;
  handlePopupMenu?: (event: GestureResponderEvent) => void;
}
type ButtonSytlesTyps = {
  width: string;
  height: string;
  'border-radius': string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const ButtonContainer = styled.TouchableOpacity<Props>`
  position: absolute;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  elevation: 6;
  justify-content: center;
  align-items: center;
`;

const FloatPlusButton = ({
  style,
  handlePopupMenu,
}: Props): React.ReactElement => {
  return (
    <ButtonContainer style={style} onPress={handlePopupMenu}>
      <IC_PLUS width="20" height="20" />
    </ButtonContainer>
  );
};

export default FloatPlusButton;
