import { JSX, splitProps } from "solid-js";

interface Props extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
}

export default (props: Props) => {
  const [local, other] = splitProps(props, ["class"]);

  return (
    <textarea
      class={
        "rounded px-3 py-2 border border-gray-300 w-full mb-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition resize-none " +
        local.class
      }
      {...other}
    ></textarea>
  );
};
