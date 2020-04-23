import { ActivityIndicator } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
  align-items: center;
  justify-content: center;
`;

const Loading = (): React.ReactElement => {
  return (
    <Container>
      <ActivityIndicator color="#00DF9B" size="large" />
    </Container>
  );
};

export default Loading;
