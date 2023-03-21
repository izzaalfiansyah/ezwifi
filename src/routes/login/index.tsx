import { createStore } from "solid-js/store";
import { A, useNavigate } from "solid-start";
import auth from "~/services/auth";

export default function () {
  const [req, setReq] = createStore<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    try {
      const res = await auth.login(req);
      localStorage.setItem("token", res.token);

      alert("berhasil login");

      setReq({
        username: "",
        password: "",
      });

      navigate("/");
    } catch (e: any) {
      alert(e.response.data.message);
    }
  }

  return (
    <div class="min-h-screen flex flex-col justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        class="py-5 backdrop-blur-sm rounded-xl max-w-[450px] w-full p-8 bg-white shadow"
      >
        <div class="mb-10">
          <div class="text-2xl font-semibold">Login</div>
          <div>Mulai masuk ke akun anda!</div>
        </div>
        <input
          type="text"
          class="form-field"
          placeholder="Username atau Email"
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
            Masuk
          </button>
        </div>
        <div class="mt-5 text-center">
          Belum punya akun? Daftar{" "}
          <A href="/register" class="text-primary">
            di sini
          </A>
        </div>
      </form>
    </div>
  );
}
