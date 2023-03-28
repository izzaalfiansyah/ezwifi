import { Show } from "solid-js";

interface Props {
  title?: string;
  children: any;
}

export default (props: Props) => {
  return (
    <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Show when={props.title}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
      </Show>
      <div class="text-gray-700 dark:text-gray-400">{props.children}</div>
    </div>
  );
};
