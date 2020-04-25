import { GoalContext, GoalContextProvider } from '../Goal';
import React, { useContext } from 'react';
import { RenderResult, act, render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

let testingLib: RenderResult;

const FakeChild: React.FC = () => {
  const { goalLists } = useContext<IGoalContext>(GoalContext);

  return (
    <View>
      {goalLists === undefined || goalLists.length === 0 ? (
        <Text>GolaList: empty</Text>
      ) : (
        goalLists.map((goalItem, i) => (
          <View key={i}>
            <Text>GName: {goalItem.GName}</Text>
          </View>
        ))
      )}
    </View>
  );
};

describe('[GoalContextProvider] render test', () => {
  const component = (
    <GoalContextProvider>
      <FakeChild />
    </GoalContextProvider>
  );

  it('[:default] component and snapshot matches', () => {
    testingLib = render(component);
    expect(testingLib.baseElement).toMatchSnapshot();
    expect(testingLib.baseElement).toBeTruthy();
  });
});
