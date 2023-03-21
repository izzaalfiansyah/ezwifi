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
    return res.data;
  },
  async register(props: UserInterface): Promise<UserInterface | void> {
    const res = await http.post("/register", props);
    return res.data;
  },
};
