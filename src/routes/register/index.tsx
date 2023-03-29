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
        class="backdrop-blur-sm rounded-xl max-w-[600px] w-full p-8 bg-white shadow"
      >
        <div class="mb-10">
          <div class="text-2xl font-semibold">Register</div>
          <div>Daftarkan akun anda!</div>
        </div>
        <input
          class="input input-bordered w-full mb-3"
          placeholder="Nama Kamu"
          required
          value={req.nama}
          onChange={(e) => setReq("nama", e.currentTarget.value)}
        />
        <div class="flex flex-col lg:flex-row lg:space-x-3">
          <input
            class="input input-bordered w-full mb-3"
            type="tel"
            placeholder="Nomor Telepon"
            required
            value={req.telepon}
            onChange={(e) => setReq("telepon", e.currentTarget.value)}
          />
          <input
            class="input input-bordered w-full mb-3"
            type="email"
            placeholder="Email"
            required
            value={req.email}
            onChange={(e) => setReq("email", e.currentTarget.value)}
          />
        </div>
        <textarea
          class="textarea textarea-bordered w-full mb-3 resize-none"
          rows={2}
          placeholder="Alamat"
          required
          value={req.alamat}
          onChange={(e) => setReq("alamat", e.currentTarget.value)}
        />
        <div class="flex flex-col lg:flex-row lg:space-x-3">
          <input
            class="input input-bordered w-full mb-3"
            placeholder="Username"
            required
            value={req.username}
            onChange={(e) => setReq("username", e.currentTarget.value)}
          />
          <input
            class="input input-bordered w-full mb-3"
            type="password"
            placeholder="Password"
            required
            value={req.password}
            onChange={(e) => setReq("password", e.currentTarget.value)}
          />
        </div>
        <div class="mt-10">
          <button type="submit" class="w-full btn btn-primary">
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
