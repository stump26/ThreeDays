import React from 'react';
import styled from 'styled-components/native';

const StyleButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #333333;
`;

const Button = ({ style, children, onPress }: BtnProps) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      {children}
    </StyleButton>
  );
};

export default Button;
