import { LinksInterface, MetaInterface } from "~/interfaces/pagination";
import UserInterface from "~/interfaces/user";
import http from "~/libs/http";

export default class UserService {
  static async get(): Promise<{
    data: Array<UserInterface>;
    links: LinksInterface;
    meta: MetaInterface;
  }> {
    const res = await http().get("/user");
    return res.data;
  }
  static async show(id: any): Promise<{
    data: UserInterface;
  }> {
    const res = await http().get("/user/" + id);
    return res.data;
  }
  static async store(props: UserInterface): Promise<{
    data: UserInterface;
  }> {
    const res = await http().post("/user", props);
    return res.data;
  }
  static async update(
    id: any,
    props: UserInterface
  ): Promise<{
    data: UserInterface;
  }> {
    const res = await http().put("/user/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<{
    data: UserInterface;
  }> {
    const res = await http().delete("/user/" + id);
    return res.data;
  }
}
