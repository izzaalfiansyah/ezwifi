import MemberInterface from "~/interfaces/member";
import http from "~/libs/http";

export default class MemberService {
  static async get(): Promise<MemberInterface> {
    const res = await http().get("/member");
    return res.data;
  }
  static async store(props: MemberInterface): Promise<MemberInterface> {
    const res = await http().post("/member", props);
    return res.data;
  }
  static async update(
    id: any,
    props: MemberInterface
  ): Promise<MemberInterface> {
    const res = await http().put("/member/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<MemberInterface> {
    const res = await http().delete("/member/" + id);
    return res.data;
  }
}
