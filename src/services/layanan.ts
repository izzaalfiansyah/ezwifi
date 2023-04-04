import LayananInterface from "~/interfaces/layanan";
import http from "~/libs/http";

export default class LayananService {
  static async get(): Promise<LayananInterface> {
    const res = await http().get("/layanan");
    return res.data;
  }
  static async store(props: LayananInterface): Promise<LayananInterface> {
    const res = await http().post("/layanan", props);
    return res.data;
  }
  static async update(
    id: any,
    props: LayananInterface
  ): Promise<LayananInterface> {
    const res = await http().put("/layanan/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<LayananInterface> {
    const res = await http().delete("/id/" + id);
    return res.data;
  }
}
