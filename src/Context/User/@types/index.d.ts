interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  loginMethod: (action: LoginActions) => void;
  getUserInfo: () => void;
  logout: () => void;
}

type LoginActions = { type: 'LOCAL' | 'GOOGLE' | 'FACEBOOK' | 'KAKAO' };
