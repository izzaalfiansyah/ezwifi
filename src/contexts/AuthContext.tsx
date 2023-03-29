import {
  Accessor,
  Setter,
  createContext,
  createEffect,
  createSignal,
  useContext,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import AdminLayout from "~/layouts/Admin";
import HomeLayout from "~/layouts/Home";

interface ContextProps {
  token: Accessor<string | null>;
  setToken: Setter<string | null>;
  role: Accessor<string | null>;
  setRole: Setter<string | null>;
}

const AuthContext = createContext<ContextProps>();

export default function AuthProvider(props: { children: any }) {
  const layouts = {
    home: HomeLayout,
    admin: AdminLayout,
  };

  const defaultToken = localStorage.getItem("token");
  const defaultRole = localStorage.getItem("role");

  const [token, setToken] = createSignal<string | null>(defaultToken);
  const [role, setRole] = createSignal<string | null>(defaultRole);

  const [selectedLayout, setSelectedLayout] =
    createSignal<keyof typeof layouts>("home");

  const value: ContextProps = {
    token: token,
    setToken: setToken,
    role: role,
    setRole: setRole,
  };

  createEffect(() => {
    if (!!token()) {
      setSelectedLayout("admin");
    } else {
      setSelectedLayout("home");
    }
  });

  return (
    <AuthContext.Provider value={value}>
      <Dynamic component={layouts[selectedLayout()]}>{props.children}</Dynamic>
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
