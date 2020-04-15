import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import PlusIc from '~/assets/images/plusicon.svg';

const TodoContainer = styled.View`
  margin: 0 28px;
  height: 300px;
`;

const H3 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;

const TodoCard = styled.View``;

const EmptyListContainer = styled.TouchableOpacity`
  flex: 1;
  background: #ffffff;
  margin: 8px 0;
  box-shadow: 0 5px 15px #000;
  elevation: 6;
  justify-content: space-evenly;
  align-items: center;
`;

const EmptyTodo = () => {
  return (
    <EmptyListContainer>
      <H3>할일이 비어있어요{'\n'}작업을 추가해봐요</H3>
      <SvgXml xml={PlusIc} />
    </EmptyListContainer>
  );
};

const TodoList = () => {
  return <TodoCard />;
};

const TodoBox = () => {
  const [TodoList, setTodoList] = useState([]);
  return (
    <TodoContainer>
      <H3>Todo</H3>
      {TodoList.length === 0 ? <EmptyTodo /> : <TodoList />}
    </TodoContainer>
  );
};

export default TodoBox;
