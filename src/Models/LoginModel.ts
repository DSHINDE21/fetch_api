export interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export interface FormValues {
  email: string;
  password: string;
}

export interface LogoutFormProps {
  onLogout: (email: string, password: string) => null;
}
