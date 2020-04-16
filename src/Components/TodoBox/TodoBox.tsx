import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import PlusIc from '~/assets/images/plusicon.svg';
import IcCheckboxOn from '~/assets/images/Checkbox_on.svg';
import IcCheckboxOff from '~/assets/images/Checkbox_off.svg';
import { TodoContext } from '~/Context/Todo';

const TodoContainer = styled.View`
  margin: 0 28px;
  height: 300px;
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

const CardView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 83px;
  margin: 6px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  elevation: 5;
`;
const CheckBoxField = styled.View`
  display: flex;
  align-items: center;
  flex-basis: 17%;
`;

const EmptyTodo = () => {
  return (
    <EmptyListContainer>
      <H3>할일이 비어있어요{'\n'}작업을 추가해봐요</H3>
      <SvgXml xml={PlusIc} />
    </EmptyListContainer>
  );
};

const ChkBox = ({ value }: { value: boolean }) => {
  return (
    <CheckBoxField>
      {value ? <SvgXml xml={IcCheckboxOn} /> : <SvgXml xml={IcCheckboxOff} />}
    </CheckBoxField>
  );
};

const TodoCard = ({ item }: { item: ITodoInfo }) => {
  return (
    <CardView>
      <ChkBox value={item.SJCK} />
      <H3>{item.JName}</H3>
    </CardView>
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
  const { todoLists, getTodoInfo } = useContext<ITodoContext>(TodoContext);
  console.log('TodoBox -> todoLists', todoLists);
  useEffect(() => {
    getTodoInfo();
  }, []);
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
