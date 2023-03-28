import { JSX, splitProps } from "solid-js";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default (props: Props) => {
  const [local, other] = splitProps(props, ["class"]);

  return (
    <button
      type="button"
      {...other}
      class={
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " +
        local.class
      }
    ></button>
  );
};
