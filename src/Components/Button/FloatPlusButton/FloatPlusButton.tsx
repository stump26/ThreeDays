import React from 'react';
import styled from 'styled-components/native';
import { GestureResponderEvent } from 'react-native';

import { IC_PLUS } from '~/Utils/svg';

interface Props {
  readonly size: { width: number; height: number };
  readonly pos?: {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  };
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

  ${({ size, pos }) => {
    let style: ButtonSytlesTyps = {
      width: `${size.width}px`,
      height: `${size.height}px`,
      'border-radius': `${size.height / 2}px`,
    };
    if (pos) {
      if (pos.top) {
        style.top = `${pos.top}px`;
      }
      if (pos.right) {
        style.right = `${pos.right}px`;
      }
      if (pos.bottom) {
        style.bottom = `${pos.bottom}px`;
      }
      if (pos.left) {
        style.left = `${pos.left}px`;
      }
    }
    return style;
  }}
`;

const FloatPlusButton = ({ size, pos, handlePopupMenu }: Props) => {
  return (
    <ButtonContainer size={size} pos={pos} onPress={handlePopupMenu}>
      <IC_PLUS width="20" height="20" />
    </ButtonContainer>
  );
};

export default FloatPlusButton;
