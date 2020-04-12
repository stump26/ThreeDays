interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  signInMethod: (action: LoginActions) => void;
  signUpMethod: (action: LoginActions) => void;
  getUserInfo: () => void;
  logout: () => void;
}

type LoginActions = { type: 'LOCAL' | 'GOOGLE' | 'FACEBOOK' | 'KAKAO' };
