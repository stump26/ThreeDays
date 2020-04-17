import React from 'react';
import { Dimensions, Text } from 'react-native';

import { POPUP_BUBBLE } from '~/Utils/svg';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
  isVisible: boolean;
  coord: { x: number; y: number };
  handlePopupMenu: () => void;
  children: JSX.Element | Array<JSX.Element>;
}

interface StyleProps {
  readonly visible: boolean;
  readonly coord: { x: number; y: number };
}

const FakeContainerOutbound = styled.TouchableHighlight<{ visible: boolean }>`
  ${(visible) =>
    visible
      ? `
          position: absolute;
          left: 0;
          top: 0;
          width: ${windowWidth}px;
          height: ${windowHeight}px;
          background-color: #222;
          opacity: 0.6;
          elevation: 7;
        `
      : `display:none;`}
`;
const Container = styled.View<StyleProps>`
  display:flex;
  position: absolute;
  height:100px;
  width:126px;
  ${({ visible }) => (visible ? 'display:flex' : 'display:none;')}
  ${({ visible }) => (visible ? 'elevation: 8;' : '')}
  ${({ coord: { x } }) => `right:${x - 17}px`};
  ${({ coord: { y } }) => `bottom:${y + 30}px`};
  flex-direction:column;
  justify-content:space-around;
`;

const PopUpBubbleContainer = styled(POPUP_BUBBLE)`
  position: absolute;
`;

const PopUpMenu = ({ isVisible, coord, handlePopupMenu, children }: Props) => {
  return (
    <>
      <FakeContainerOutbound visible={isVisible} onPress={handlePopupMenu}>
        <Text> </Text>
      </FakeContainerOutbound>
      <Container visible={isVisible} coord={coord}>
        <PopUpBubbleContainer />
        {children}
      </Container>
    </>
  );
};

export default PopUpMenu;
