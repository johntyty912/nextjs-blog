export interface Auth {
  token: any;
  login: (token: any) => void;
  logout: () => void;
  isLogin: boolean;
  isLoading: boolean;
}
