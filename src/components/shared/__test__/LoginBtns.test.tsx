import React, { ReactElement } from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react-native';
import {
  createTestElement,
  createTestProps,
} from '../../../utils/test/testUtils';

import LoginBtns from '../LoginBtns';

let props: any;
let component: ReactElement;
let testingLib: RenderResult;

describe('[LoginBtns:login] rendering test', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<LoginBtns {...props} curPage="login" />);
  });

  it('should render without crashing', () => {
    testingLib = render(component);
    expect(testingLib.baseElement).toBeTruthy();
    // Remove snapshot testing for now for issue https://github.com/VirgilSecurity/virgil-e3kit-js/issues/82
    expect(testingLib.baseElement).toMatchSnapshot();
  });
});

describe('[LoginBtns:signup] rendering test', () => {
  beforeEach(() => {
    props = createTestProps({
      curPage: 'login',
      handlePage: jest.fn(),
    });
    component = createTestElement(<LoginBtns {...props} />);
  });

  it('should render without crashing', () => {
    testingLib = render(component);
    expect(testingLib.baseElement).toBeTruthy();
    expect(testingLib.baseElement).toMatchSnapshot();
  });
});

describe('[LoginBtns:login] interaction', () => {
  beforeAll(() => {
    props = createTestProps({
      curPage: 'login',
      handlePage: jest.fn(),
    });
    component = createTestElement(<LoginBtns {...props} />);
    testingLib = render(component);
  });

  it('should simulate local-sign-in button has clicked', () => {
    const btnLocalSignIn = testingLib.getByTestId('btn-local-sign-in');
    fireEvent.press(btnLocalSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate google-sign-in button has clicked', () => {
    const btnGoogleSignIn = testingLib.getByTestId('btn-google-sign-in');
    fireEvent.press(btnGoogleSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate facebook-sign-in button has clicked', () => {
    const btnFBSignIn = testingLib.getByTestId('btn-facebook-sign-in');
    fireEvent.press(btnFBSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate kakao-sign-in button has clicked', () => {
    const btnKakaoSignIn = testingLib.getByTestId('btn-kakao-sign-in');
    fireEvent.press(btnKakaoSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate sign-up button has clicked', () => {
    const btnKakaoSignIn = testingLib.getByTestId('btn-sign-up');
    fireEvent.press(btnKakaoSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });
});

describe('[LoginBtns:signup] interaction', () => {
  beforeAll(() => {
    props = createTestProps({
      curPage: 'signup',
      handlePage: jest.fn(),
    });
    component = createTestElement(<LoginBtns {...props} />);
    testingLib = render(component);
  });

  it('should simulate local-sign-up button has clicked', () => {
    const btnLocalSignIn = testingLib.getByTestId('btn-local-sign-up');
    fireEvent.press(btnLocalSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate google-sign-up button has clicked', () => {
    const btnGoogleSignIn = testingLib.getByTestId('btn-google-sign-up');
    fireEvent.press(btnGoogleSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate facebook-sign-up button has clicked', () => {
    const btnFBSignIn = testingLib.getByTestId('btn-facebook-sign-up');
    fireEvent.press(btnFBSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });

  it('should simulate kakao-sign-up button has clicked', () => {
    const btnKakaoSignIn = testingLib.getByTestId('btn-kakao-sign-up');
    fireEvent.press(btnKakaoSignIn);
    // expect(props.navigation.navigate).toHaveBeenCalledWith('')
  });
});
