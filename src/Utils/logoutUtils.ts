import { NavigateFunction } from "react-router-dom";
export function handleLogout(navigate: NavigateFunction) {
  // localStorage.removeItem("authToken");
  navigate("/");
}
