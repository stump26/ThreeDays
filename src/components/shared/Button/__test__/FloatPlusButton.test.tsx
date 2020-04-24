import FloatPlusButton from '../FloatPlusButton';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<FloatPlusButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
