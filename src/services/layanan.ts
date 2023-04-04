import LayananInterface from "~/interfaces/layanan";
import { LinksInterface, MetaInterface } from "~/interfaces/pagination";
import http from "~/libs/http";

export default class LayananService {
  static async get(): Promise<{
    data: Array<LayananInterface>;
    links: LinksInterface;
    meta: MetaInterface;
  }> {
    const res = await http().get("/layanan");
    return res.data;
  }
  static async show(id: any): Promise<{
    data: LayananInterface;
  }> {
    const res = await http().get("/layanan/" + id);
    return res.data;
  }
  static async store(props: LayananInterface): Promise<{
    data: LayananInterface;
  }> {
    const res = await http().post("/layanan", props);
    return res.data;
  }
  static async update(
    id: any,
    props: LayananInterface
  ): Promise<{
    data: LayananInterface;
  }> {
    const res = await http().put("/layanan/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<{
    data: LayananInterface;
  }> {
    const res = await http().delete("/id/" + id);
    return res.data;
  }
}
