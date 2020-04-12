import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  src: ImageSourcePropType;
  children: JSX.Element | Array<JSX.Element>;
}

const ImageView = styled.ImageBackground`
  flex: 1;
  height: auto;
`;

const Filter = styled.View`
  flex: 1;
  background: rgba(56, 56, 56, 0.78);
`;

const ImgBackground = ({ src, children }: Props) => {
  return (
    <ImageView source={src}>
      <Filter>{children}</Filter>
    </ImageView>
  );
};

export default ImgBackground;
