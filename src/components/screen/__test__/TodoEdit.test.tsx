import React, { ReactElement } from 'react';
import { RenderResult, render } from '@testing-library/react-native';
import {
  createTestElement,
  createTestProps,
} from '../../../utils/test/testUtils';

import TodoEdit from '../TodoEdit';

let props: any;
let component: ReactElement;
let testingLib: RenderResult;

describe('[TodoEdit] screen rendering test', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<TodoEdit {...props} />);
  });

  it('should render without crashing', () => {
    testingLib = render(component);
    expect(testingLib.baseElement).toBeTruthy();
    // Remove snapshot testing for now for issue https://github.com/VirgilSecurity/virgil-e3kit-js/issues/82
    expect(testingLib.baseElement).toMatchSnapshot();
  });
});
