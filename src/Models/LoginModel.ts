export interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export interface LogoutFormProps {
  onLogout: (username: string, password: string) => null;
}
