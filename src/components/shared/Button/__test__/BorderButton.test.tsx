import BorderButton from '../BorderButton';
import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

test('[BorderButton]renders correctly', () => {
  const tree = renderer
    .create(
      <BorderButton>
        <Text>test</Text>
      </BorderButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
