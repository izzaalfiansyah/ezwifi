import { JSX } from "solid-js";

export default function HomeLayout(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div class="min-h-screen bg-gray-50">{props.children}</div>;
}
