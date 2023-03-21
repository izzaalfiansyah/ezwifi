import { createStore } from "solid-js/store";
import { A, useNavigate } from "solid-start";
import UserInterface from "~/interfaces/user";
import auth from "~/services/auth";

export default function () {
  const [req, setReq] = createStore<UserInterface>({
    nama: "",
    telepon: "",
    email: "",
    alamat: "",
    username: "",
    password: "",
    role: "3",
  });

  const navigate = useNavigate();

  function nullable() {
    setReq({
      nama: "",
      telepon: "",
      email: "",
      alamat: "",
      username: "",
      password: "",
      role: "3",
    });
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    try {
      await auth.register(req);
      alert("berhasil registrasi data. Silahkan login!");

      nullable();

      navigate("/login");
    } catch (e: any) {
      alert(e.response.data.message);
    }
  }

  return (
    <div class="min-h-screen flex flex-col items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        class="backdrop-blur-sm rounded-xl max-w-[550px] w-full p-8 bg-white shadow"
      >
        <div class="mb-10">
          <div class="text-2xl font-semibold">Register</div>
          <div>Daftarkan akun anda!</div>
        </div>
        <input
          type="text"
          class="form-field"
          placeholder="Nama Kamu"
          required
          value={req.nama}
          onChange={(e) => setReq("nama", e.currentTarget.value)}
        />
        <div class="flex flex-col lg:flex-row lg:space-x-3">
          <input
            type="tel"
            class="form-field"
            placeholder="Nomor Telepon"
            required
            value={req.telepon}
            onChange={(e) => setReq("telepon", e.currentTarget.value)}
          />
          <input
            type="text"
            class="form-field"
            placeholder="Email"
            required
            value={req.email}
            onChange={(e) => setReq("email", e.currentTarget.value)}
          />
        </div>
        <textarea
          rows={4}
          class="form-field resize-none"
          placeholder="Alamat"
          required
          value={req.alamat}
          onChange={(e) => setReq("alamat", e.currentTarget.value)}
        />
        <div class="flex flex-col lg:flex-row lg:space-x-3">
          <input
            type="text"
            class="form-field"
            placeholder="Username"
            required
            value={req.username}
            onChange={(e) => setReq("username", e.currentTarget.value)}
          />
          <input
            type="password"
            class="form-field"
            placeholder="Password"
            required
            value={req.password}
            onChange={(e) => setReq("password", e.currentTarget.value)}
          />
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="w-full rounded shadow-sm p-3 bg-primary text-white"
          >
            Daftar
          </button>
        </div>
        <div class="mt-5 text-center">
          Sudah punya akun? Login{" "}
          <A href="/login" class="text-primary">
            di sini
          </A>
        </div>
      </form>
    </div>
  );
}
