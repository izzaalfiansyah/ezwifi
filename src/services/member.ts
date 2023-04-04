import MemberInterface from "~/interfaces/member";
import { LinksInterface, MetaInterface } from "~/interfaces/pagination";
import http from "~/libs/http";

export default class MemberService {
  static async get(): Promise<{
    data: Array<MemberInterface>;
    links: LinksInterface;
    meta: MetaInterface;
  }> {
    const res = await http().get("/member");
    return res.data;
  }
  static async show(id: any): Promise<{
    data: MemberInterface;
  }> {
    const res = await http().get("/member/" + id);
    return res.data;
  }
  static async store(props: MemberInterface): Promise<{
    data: MemberInterface;
  }> {
    const res = await http().post("/member", props);
    return res.data;
  }
  static async update(
    id: any,
    props: MemberInterface
  ): Promise<{
    data: MemberInterface;
  }> {
    const res = await http().put("/member/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<{
    data: MemberInterface;
  }> {
    const res = await http().delete("/member/" + id);
    return res.data;
  }
}
