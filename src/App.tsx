import React from "react";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import Navigator from "~/Screens/Navigator";

const Container = Styled.View`
  flex:1;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  );
};

export default App;
