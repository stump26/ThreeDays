import * as React from 'react';

import { Button, View } from 'react-native';
import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

import { BackActionProvider } from '../BackActionProvider';

const FakeChild = (): React.ReactElement => {
  return (
    <View>
      <Button
        testID="BUTTON"
        onPress={(): void => {
          // do notting
        }}
        title="Button"
      />
    </View>
  );
};

describe('Rendering', () => {
  const component = (
    <BackActionProvider>
      <FakeChild />
    </BackActionProvider>
  );
  const testingLib: RenderResult = render(component);

  it('component and snapshot matches', () => {
    const { baseElement } = testingLib;
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});

describe('Interactions', () => {
  it('should setUser', async () => {
    const { getByTestId } = render(
      <BackActionProvider>
        <FakeChild />
      </BackActionProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('BUTTON'));
    });
  });
});
