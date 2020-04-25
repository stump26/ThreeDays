import Button from '../Button';
import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Button>
        <Text>test</Text>
      </Button>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
