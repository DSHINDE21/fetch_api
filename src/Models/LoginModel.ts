export interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export interface LogoutFormProps {
  onLogout: (email: string, password: string) => null;
}
