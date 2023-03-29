import { useAuthContext } from "~/contexts/AuthContext";
import TokenInterface from "~/interfaces/token";
import UserInterface from "~/interfaces/user";
import http from "~/libs/http";

interface LoginProps {
  username: string;
  password: string;
}

export default {
  async login(props: LoginProps): Promise<TokenInterface> {
    const res = await http.post("/login", props);
    const data = res.data as TokenInterface;

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.data.role);

    return data;
  },
  async register(props: UserInterface): Promise<UserInterface | void> {
    const res = await http.post("/register", props);
    return res.data;
  },
  async logout(): Promise<void> {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    const authContext = useAuthContext();

    authContext?.setToken("");
    authContext?.setRole("");
  },
};
