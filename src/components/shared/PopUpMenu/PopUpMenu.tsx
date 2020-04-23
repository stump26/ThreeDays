import { Dimensions, Text } from 'react-native';

import { POPUP_BUBBLE } from '~/utils/svg';
import React from 'react';
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
  ${(visible): string =>
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
      : 'display:none;'}
`;
const Container = styled.View<StyleProps>`
  display:flex;
  position: absolute;
  height:100px;
  width:126px;
  ${({ visible }): string => (visible ? 'display:flex' : 'display:none;')}
  ${({ visible }): string => (visible ? 'elevation: 8;' : '')}
  ${({ coord: { x } }): string => `right:${x - 17}px`};
  ${({ coord: { y } }): string => `bottom:${y + 30}px`};
  flex-direction:column;
  justify-content:space-around;
`;

const PopUpBubbleContainer = styled.View`
  position: absolute;
`;

const PopUpMenu = ({
  isVisible,
  coord,
  handlePopupMenu,
  children,
}: Props): React.ReactElement => {
  return (
    <>
      <FakeContainerOutbound visible={isVisible} onPress={handlePopupMenu}>
        <Text> </Text>
      </FakeContainerOutbound>
      <Container visible={isVisible} coord={coord}>
        <PopUpBubbleContainer>
          <POPUP_BUBBLE />
        </PopUpBubbleContainer>
        {children}
      </Container>
    </>
  );
};

export default PopUpMenu;
