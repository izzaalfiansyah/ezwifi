import TransaksiInterface from "~/interfaces/transaksi";
import http from "~/libs/http";

export default class TransaksiService {
  static async get(): Promise<TransaksiInterface> {
    const res = await http().get("/transaksi");
    return res.data;
  }
  static async post(props: TransaksiInterface): Promise<TransaksiInterface> {
    const res = await http().post("/transaksi", props);
    return res.data;
  }
  static async update(
    id: any,
    props: TransaksiInterface
  ): Promise<TransaksiInterface> {
    const res = await http().put("/transaksi/" + id, props);
    return res.data;
  }
  static async destroy(id: any): Promise<TransaksiInterface> {
    const res = await http().delete("/transaksi/" + id);
    return res.data;
  }
}
