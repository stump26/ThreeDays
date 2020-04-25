import React, { useContext } from 'react';
import { RenderResult, render } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { TodoContext, TodoContextProvider } from '../Todo';

let testingLib: RenderResult;

const FakeChild: React.FC = () => {
  const { goalLists: todoLists } = useContext<ITodoContext>(TodoContext);

  return (
    <View>
      {todoLists === undefined || todoLists.length === 0 ? (
        <Text>GolaList: empty</Text>
      ) : (
        todoLists.map((todoItem, i) => (
          <View key={i}>
            <Text>JName: {todoItem.JName}</Text>
          </View>
        ))
      )}
    </View>
  );
};

describe('[GoalContextProvider] render test', () => {
  const component = (
    <TodoContextProvider>
      <FakeChild />
    </TodoContextProvider>
  );

  it('[:default] component and snapshot matches', () => {
    testingLib = render(component);
    expect(testingLib.baseElement).toMatchSnapshot();
    expect(testingLib.baseElement).toBeTruthy();
  });
});
