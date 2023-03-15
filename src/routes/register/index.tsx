import { createStore } from "solid-js/store";
import { A } from "solid-start";

export default function () {
  const [req, setReq] = createStore<{
    nama: string;
    telepon: string;
    email: string;
    alamat: string;
    username: string;
    password: string;
  }>({
    nama: "",
    telepon: "",
    email: "",
    alamat: "",
    username: "",
    password: "",
  });

  function nullable() {
    setReq({
      nama: "",
      telepon: "",
      email: "",
      alamat: "",
      username: "",
      password: "",
    });
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    nullable();
  }

  return (
    <div class="min-h-screen flex flex-col items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        class="py-5 backdrop-blur-sm rounded-xl max-w-[550px] w-full lg:p-8 lg:bg-white lg:shadow"
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
