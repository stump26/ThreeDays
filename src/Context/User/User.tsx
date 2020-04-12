import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  signInMethod: (action: LoginActions) => {},
  signUpMethod: (action: LoginActions) => {},
  getUserInfo: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

const UserContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (email: string, password: string): void => {
    // Use Eamil and Passowrd for login API
    // Get token and UserInfo via Login API

    // Need Login logic(Fetch) to hear
    const token = 'token';

    AsyncStorage.setItem('token', token).then(() => {
      setUserInfo({
        name: 'test',
        email: 'test@test.com',
      });
      setIsLoading(true);
    });

    console.log('UserContextProvider -> userInfo', userInfo);
  };

  const signInMethod = (action: LoginActions) => {
    switch (action.type) {
      case 'LOCAL':
        login('test@test.com', 'qwer1234');
        break;
      case 'GOOGLE':
        break;
      case 'FACEBOOK':
        break;
      case 'KAKAO':
        break;
      default:
        throw new Error();
    }
  };
  const signUpMethod = (action: LoginActions) => {
    switch (action.type) {
      case 'LOCAL':
        login('test@test.com', 'qwer1234');
        break;
      case 'GOOGLE':
        break;
      case 'FACEBOOK':
        break;
      case 'KAKAO':
        break;
      default:
        throw new Error();
    }
  };

  const getUserInfo = (): void => {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value) {
          setUserInfo({
            name: 'test@test.com',
            email: 'qwer1234',
          });
        }
        setIsLoading(true);
      })
      .catch(() => {
        setUserInfo(undefined);
        setIsLoading(true);
      });
  };

  const logout = (): void => {
    AsyncStorage.removeItem('token');
    setUserInfo(undefined);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        userInfo,
        signInMethod,
        signUpMethod,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
