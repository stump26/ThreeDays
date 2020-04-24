import React from 'react';
import Styled from 'styled-components/native';

interface Props {
  onPress?: () => void;
  children: JSX.Element | Array<JSX.Element> | string;
}

const AddSubTaskContainer = Styled.View`
  flex-direction:row;
  width:100%;
  height:30px;
  align-items:center;
  justify-content:center;
  border-width:2px;
  border-color:#979797;
  border-style:dashed;
  border-radius:5px;
`;
const AddSubTaskBtn = Styled.TouchableOpacity`
  
`;

const BorderButton: React.SFC<Props> = ({ onPress, children }) => {
  console.log('typeof children', typeof children);
  return (
    <AddSubTaskBtn onPress={onPress}>
      <AddSubTaskContainer>{children}</AddSubTaskContainer>
    </AddSubTaskBtn>
  );
};

export default BorderButton;
