import LayananInterface from "./layanan";
import UserInterface from "./user";

export default interface MemberInterface {
  id: number;
  petugas?: UserInterface;
  petugas_id: number;
  pelanggan?: UserInterface;
  pelanggan_id: number;
  layanan?: LayananInterface;
  layanan_id: number;
  status: string;
  keterangan?: string;
}
