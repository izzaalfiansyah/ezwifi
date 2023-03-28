import { JSX, splitProps } from "solid-js";

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export default (props: Props) => {
  const [local, other] = splitProps(props, ["class"]);

  return (
    <input
      type="text"
      {...other}
      class={
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 " +
        local.class
      }
    ></input>
  );
};
