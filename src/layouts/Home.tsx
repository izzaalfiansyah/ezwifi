import { JSX } from "solid-js";

export default function HomeLayout(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <svg
        viewBox="0 0 390 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full fixed top-0 left-0"
      >
        <path
          d="M302 -61C302 21.8427 221.411 89 122 89C22.5887 89 -58 21.8427 -58 -61C-58 -143.843 22.5887 -211 122 -211C221.411 -211 302 -143.843 302 -61Z"
          fill="#17F448"
          fill-opacity="0.49"
        />
        <path
          d="M448 -77.0328C448 -15.8537 388.485 33.7418 315.07 33.7418C241.655 33.7418 182.141 -15.8537 182.141 -77.0328C182.141 -138.212 241.655 -187.807 315.07 -187.807C388.485 -187.807 448 -138.212 448 -77.0328Z"
          fill="#17F448"
          fill-opacity="0.49"
        />
      </svg>
      <svg
        viewBox="0 0 300 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fixed bottom-0 right-0"
      >
        <path
          d="M316 145.5C316 218.125 245.261 277 158 277C70.739 277 0 218.125 0 145.5C0 72.8746 70.739 14 158 14C245.261 14 316 72.8746 316 145.5Z"
          fill="#17F448"
          fill-opacity="0.49"
        />
        <path
          d="M462 110.967C462 172.146 402.485 221.742 329.07 221.742C255.655 221.742 196.141 172.146 196.141 110.967C196.141 49.788 255.655 0.192505 329.07 0.192505C402.485 0.192505 462 49.788 462 110.967Z"
          fill="#17F448"
          fill-opacity="0.49"
        />
      </svg>

      <div class="relative text-gray-700 text-sm">{props.children}</div>
    </>
  );
}
