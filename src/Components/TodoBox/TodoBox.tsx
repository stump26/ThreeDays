import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import CardView from '~/Components/CardView';
import CheckBox from '~/Components/CheckBox';
import { IC_PLUS } from '~/Utils/svg';
import { TodoContext } from '~/Context/Todo';

const TodoContainer = styled.View`
  margin: 10px 28px 40px;
`;

const H3 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

const EmptyListContainer = styled.TouchableOpacity`
  flex: 1;
  background: #ffffff;
  margin: 8px 0;
  box-shadow: 0 5px 15px #000;
  elevation: 6;
  justify-content: space-evenly;
  align-items: center;
`;

const CardContainer = styled(CardView)`
  flex-direction: row;
`;

const CardDescField = styled.View``;

const EmptyTodo = () => {
  return (
    <EmptyListContainer>
      <H3>할일이 비어있어요{'\n'}작업을 추가해봐요</H3>
      <IC_PLUS />
    </EmptyListContainer>
  );
};

const TodoCard = ({ item }: { item: ITodoInfo }) => {
  const { dispatchTodo } = useContext(TodoContext);
  const handleChecker = (JID: number) => {
    dispatchTodo && dispatchTodo({ type: 'TOGGLE_CHK', JID: JID });
  };
  const dataToString = (IDate: Date) => {};

  return (
    <CardContainer>
      <CheckBox id={item.JID} value={item.SJCK} handleChecker={handleChecker} />
      <CardDescField>
        <H3>{item.JName}</H3>
        <Text>{item.expireDate?.toISOString()}</Text>
      </CardDescField>
    </CardContainer>
  );
};

const TodoListView = ({ list }: { list: Array<ITodoInfo> }) => {
  return (
    <>
      {list?.map((todoItem) => (
        <TodoCard key={todoItem.JID} item={todoItem} />
      ))}
    </>
  );
};

const TodoBox = () => {
  const { todoLists } = useContext<ITodoContext>(TodoContext);

  return (
    <TodoContainer>
      <H3>Todo</H3>
      {todoLists === undefined || todoLists?.length === 0 ? (
        <EmptyTodo />
      ) : (
        <TodoListView list={todoLists} />
      )}
    </TodoContainer>
  );
};

export default TodoBox;
