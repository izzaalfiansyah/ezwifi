import MemberInterface from "./member";

export default interface TransaksiInterface {
  id: number;
  member_id: number;
  member: MemberInterface;
  bulan: number;
  bulan_detail: string;
  tahun: number;
  total?: number;
  bayar?: number;
  keterangan?: string;
}
