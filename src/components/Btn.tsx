import { JSX, splitProps } from "solid-js";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default (props: Props) => {
  const [local, other] = splitProps(props, ["class"]);

  return (
    <button
      type="submit"
      class={
        "rounded shadow-sm p-3 py-2.5 bg-primary text-white " + local.class
      }
      {...other}
    ></button>
  );
};
