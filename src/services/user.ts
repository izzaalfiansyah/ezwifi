import UserInterface from "~/interfaces/user";
import http from "~/libs/http";

export default class UserService {
  static async get(): Promise<UserInterface> {
    const res = await http().get("/user");
    return res.data;
  }
  static async store(props: UserInterface): Promise<UserInterface> {
    const res = await http().post("/user", props);
    return res.data;
  }
  static async update(id: any, props: UserInterface): Promise<UserInterface> {
    const res = await http().put("/user/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<UserInterface> {
    const res = await http().delete("/user/" + id);
    return res.data;
  }
}
