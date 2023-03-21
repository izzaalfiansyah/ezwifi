import { JSX } from "solid-js";

export default function HomeLayout(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div class="min-h-screen bg-primary">{props.children}</div>;
}
