import React from 'react';
import styled from 'styled-components/native';

interface Props {
  name: keyof AppNaviParamList;
  handleOnPressOption: (target: keyof AppNaviParamList) => void;
  children: JSX.Element | JSX.Element[] | string;
}

const Container = styled.TouchableOpacity`
  margin: 10px 0;
  height: 21px;
`;
const Label = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
  padding: 5px 0;
`;

const PopUpOption = ({
  name,
  handleOnPressOption,
  children,
}: Props): React.ReactElement => {
  return (
    <Container
      onPress={(): void => {
        handleOnPressOption(name);
      }}
    >
      <Label>{children}</Label>
    </Container>
  );
};

export default PopUpOption;
