import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import { IC_CHKBOX_OFF, IC_CHKBOX_ON, IC_PLUS } from '~/Utils/svg';
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

const CardView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 83px;
  margin: 6px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  elevation: 5;
`;

const CheckBoxField = styled.View`
  align-items: center;
  flex-basis: 20%;
`;
const ChkBoxContainer = styled.TouchableWithoutFeedback`
  border-radius: 8px;
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

const ChkBox = ({
  id,
  value,
  handleChecker,
}: {
  id: number;
  value: boolean;
  handleChecker: (id: number) => void;
}) => {
  return (
    <CheckBoxField>
      <ChkBoxContainer
        onPress={() => {
          handleChecker(id);
        }}
      >
        {value ? (
          <IC_CHKBOX_ON width={30} height={30} />
        ) : (
          <IC_CHKBOX_OFF width={30} height={30} />
        )}
      </ChkBoxContainer>
    </CheckBoxField>
  );
};

const TodoCard = ({ item }: { item: ITodoInfo }) => {
  const { dispatchTodo } = useContext(TodoContext);
  const handleChecker = (JID: number) => {
    dispatchTodo && dispatchTodo({ type: 'TOGGLE_CHK', JID: JID });
  };
  const dataToString = (IDate: Date) => {};

  return (
    <CardView>
      <ChkBox id={item.JID} value={item.SJCK} handleChecker={handleChecker} />
      <CardDescField>
        <H3>{item.JName}</H3>
        <Text>{item.expireDate?.toISOString()}</Text>
      </CardDescField>
    </CardView>
  );
};

const TodoListView = ({ list }: { list: Array<ITodoInfo> }) => {
  return (
    // <FlatList
    //   keyExtractor={(item) => item.JID.toString()}
    //   data={list}
    //   renderItem={({ item }) => <TodoCard key={item.JID} item={item} />}
    // />
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
