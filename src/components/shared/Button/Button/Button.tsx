import { StyleProp, ViewStyle } from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

interface BtnProps {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | Array<JSX.Element>;
  onPress?: () => void;
}

const StyleButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #333333;
`;

const Button = ({
  testID,
  style,
  children,
  onPress,
}: BtnProps): React.ReactElement => {
  return (
    <StyleButton testID={testID} style={style} onPress={onPress}>
      {children}
    </StyleButton>
  );
};

export default Button;
