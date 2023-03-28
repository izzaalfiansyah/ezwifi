// @refresh reload
import { Suspense, createSignal, onMount } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import "flowbite";
import { Dynamic } from "solid-js/web";
import HomeLayout from "./layouts/Home";
import AdminLayout from "./layouts/Admin";

export default function Root() {
  const isLogin = localStorage.getItem("xid");
  const [selectedLayout, setSelectedLayout] =
    createSignal<keyof typeof layouts>("home");

  const layouts = {
    home: HomeLayout,
    admin: AdminLayout,
  };

  onMount(() => {
    if (isLogin) {
      setSelectedLayout("admin");
    }
  });

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Dynamic component={layouts[selectedLayout()]}>
              <Routes>
                <FileRoutes />
              </Routes>
            </Dynamic>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
