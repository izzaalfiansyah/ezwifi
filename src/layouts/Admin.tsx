import { JSX } from "solid-js";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

export default (props: Props) => {
  return <div class="bg-gray-50 min-h-screen" {...props}></div>;
};
