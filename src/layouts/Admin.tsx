import { For, createSignal } from "solid-js";
import { useNavigate } from "solid-start";
import { useAuthContext } from "~/contexts/AuthContext";
import AuthService from "~/services/auth";

interface Props {
  children: any;
}

export default (props: Props) => {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen());
  }

  async function handleSignOut(e: Event) {
    e.preventDefault();

    await AuthService.logout();

    authContext?.setToken(null);
    authContext?.setRole(null);

    navigate("/");
  }

  const menus: Array<{
    path: string;
    title: string;
    icon: any;
  }> = [
    {
      path: "/user",
      title: "Data User",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      path: "/layanan",
      title: "Data Layanan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
    },
    {
      path: "/member",
      title: "Data Member",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      path: "/transaksi",
      title: "Data Transaksi",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
      ),
    },
    {
      path: "/profil",
      title: "Profil",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div class="min-h-screen antialised bg-gray-50">
      <div class="" id="content">
        <div
          data-section-id="1"
          data-share=""
          data-category="ta-menus"
          data-component-id="10070f9f_02_awz"
          data-container="1"
        >
          <nav class="lg:hidden py-6 px-6 border-b bg-white">
            <div class="flex items-center justify-between">
              <a class="text-2xl font-semibold" href="#" data-config-id="brand">
                <div class="font-bold text-2xl">Ezwifi</div>
              </a>
              <button
                class="navbar-burger flex items-center rounded focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  class="text-white bg-primary hover:bg-indigo-600 block h-8 w-8 p-2 rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  data-config-id="auto-svg-1-2"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
          <div class="fixed top-0 bottom-0 w-64 lg:block navbar-menu relative z-50">
            <div
              onClick={toggleSidebar}
              class="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"
              classList={{ hidden: !sidebarOpen() }}
            ></div>
            <nav
              class="fixed top-0 left-0 bottom-0 transition flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto transform -translate-x-full lg:translate-x-0"
              classList={{ "!translate-x-0": sidebarOpen() }}
            >
              <div class="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50 ">
                <a
                  class="text-xl font-semibold"
                  href="#"
                  data-config-id="brand"
                >
                  <div class="text-center text-2xl font-bold">Ezwifi</div>
                </a>
              </div>
              <div class="px-4 pb-6">
                <h3
                  class="mb-2 text-xs uppercase text-gray-400 font-medium"
                  data-config-id="header1"
                >
                  Dashboard
                </h3>
                <ul class="mb-8 text-sm font-medium">
                  <li>
                    <a
                      class="flex items-center pl-3 py-3 pr-4 text-white bg-primary rounded"
                      href="#"
                    >
                      <span class="inline-block mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-gray-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </span>
                      <span data-config-id="link1">Beranda</span>
                    </a>
                  </li>
                </ul>
                <h3
                  class="mb-2 text-xs uppercase text-gray-500 font-medium"
                  data-config-id="header2"
                >
                  Menu
                </h3>
                <ul class="text-sm font-medium">
                  <For each={menus}>
                    {(item) => (
                      <li>
                        <a
                          class="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-indigo-50 rounded"
                          href={item.path}
                        >
                          <span class="inline-block mr-3">{item.icon}</span>
                          <span>{item.title}</span>
                        </a>
                      </li>
                    )}
                  </For>
                  <li>
                    <a
                      class="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-indigo-50 rounded"
                      href="#"
                      onClick={handleSignOut}
                    >
                      <span class="inline-block mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-gray-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </span>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="mx-auto lg:ml-80" data-bucket="1">
            <section
              data-section-id="2"
              data-share=""
              data-category="ta-navbar"
              data-component-id="ba5bc4e1_01_awz"
              class="py-5 px-6 bg-white shadow"
            >
              <nav class="relative">
                <div class="flex items-center">
                  <div class="flex items-center mr-auto">
                    <a
                      class="flex items-center text-sm hover:text-gray-800"
                      href="#"
                    >
                      <span class="inline-block mr-2">
                        <svg
                          class="text-primary"
                          width="16"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-config-id="auto-svg-1-1"
                        >
                          <path
                            d="M14.6667 5.66667L9.66668 1.28333C9.20833 0.87337 8.61496 0.646723 8.00002 0.646723C7.38507 0.646723 6.7917 0.87337 6.33335 1.28333L1.33335 5.66667C1.06866 5.90339 0.857435 6.1938 0.713745 6.51854C0.570054 6.84328 0.497195 7.1949 0.500018 7.55V14.8333C0.500018 15.4964 0.76341 16.1323 1.23225 16.6011C1.70109 17.0699 2.33698 17.3333 3.00002 17.3333H13C13.6631 17.3333 14.2989 17.0699 14.7678 16.6011C15.2366 16.1323 15.5 15.4964 15.5 14.8333V7.54167C15.5017 7.18797 15.4282 6.83795 15.2846 6.51473C15.1409 6.19152 14.9303 5.90246 14.6667 5.66667V5.66667ZM9.66668 15.6667H6.33335V11.5C6.33335 11.279 6.42115 11.067 6.57743 10.9107C6.73371 10.7545 6.94567 10.6667 7.16668 10.6667H8.83335C9.05436 10.6667 9.26633 10.7545 9.42261 10.9107C9.57889 11.067 9.66668 11.279 9.66668 11.5V15.6667ZM13.8334 14.8333C13.8334 15.0543 13.7456 15.2663 13.5893 15.4226C13.433 15.5789 13.221 15.6667 13 15.6667H11.3334V11.5C11.3334 10.837 11.07 10.2011 10.6011 9.73223C10.1323 9.26339 9.49639 9 8.83335 9H7.16668C6.50364 9 5.86776 9.26339 5.39892 9.73223C4.93008 10.2011 4.66668 10.837 4.66668 11.5V15.6667H3.00002C2.779 15.6667 2.56704 15.5789 2.41076 15.4226C2.25448 15.2663 2.16668 15.0543 2.16668 14.8333V7.54167C2.16683 7.42334 2.19218 7.30641 2.24103 7.19865C2.28989 7.09088 2.36113 6.99476 2.45002 6.91667L7.45002 2.54167C7.60209 2.40807 7.79759 2.33439 8.00002 2.33439C8.20244 2.33439 8.39794 2.40807 8.55002 2.54167L13.55 6.91667C13.6389 6.99476 13.7101 7.09088 13.759 7.19865C13.8079 7.30641 13.8332 7.42334 13.8334 7.54167V14.8333Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span data-config-id="bradcrumb1">Start</span>
                    </a>
                    <span class="inline-block mx-3">
                      <svg
                        class="text-primary"
                        width="6"
                        height="10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-2-1"
                      >
                        <path
                          d="M1.23242 9.3689C1.06762 9.36887 0.906542 9.31997 0.769534 9.2284C0.632526 9.13683 0.525742 9.0067 0.462684 8.85445C0.399625 8.7022 0.383124 8.53467 0.415263 8.37304C0.447403 8.21141 0.526741 8.06294 0.643249 7.9464L3.58916 5L0.643224 2.05364C0.486959 1.89737 0.399171 1.68543 0.39917 1.46444C0.399169 1.24345 0.486957 1.03151 0.64322 0.875248C0.799483 0.718984 1.01142 0.631195 1.23241 0.631194C1.4534 0.631193 1.66534 0.718981 1.82161 0.875244L5.35676 4.41084C5.43416 4.48819 5.49556 4.58004 5.53745 4.68114C5.57934 4.78224 5.6009 4.89059 5.6009 5.00003C5.6009 5.10946 5.57934 5.21782 5.53745 5.31891C5.49556 5.42001 5.43416 5.51186 5.35676 5.58922L1.82161 9.12478C1.74432 9.20228 1.65249 9.26375 1.55137 9.30564C1.45026 9.34754 1.34186 9.36903 1.23242 9.3689Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <a
                      class="flex items-center text-sm hover:text-gray-800"
                      href="#"
                    >
                      <span class="inline-block mr-2">
                        <svg
                          class="text-primary"
                          width="20"
                          height="20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-config-id="auto-svg-3-1"
                        >
                          <path
                            d="M3.09179 13.575C3.01254 13.4991 2.91908 13.4397 2.81679 13.4C2.6139 13.3167 2.38634 13.3167 2.18346 13.4C2.08116 13.4397 1.98771 13.4991 1.90846 13.575C1.83259 13.6543 1.77312 13.7477 1.73346 13.85C1.66964 14.0018 1.6522 14.169 1.68335 14.3307C1.71449 14.4923 1.79282 14.6411 1.90846 14.7583C1.98946 14.8319 2.08247 14.8911 2.18346 14.9333C2.28321 14.9774 2.39106 15.0002 2.50012 15.0002C2.60918 15.0002 2.71704 14.9774 2.81679 14.9333C2.91778 14.8911 3.01079 14.8319 3.09179 14.7583C3.20742 14.6411 3.28575 14.4923 3.3169 14.3307C3.34804 14.169 3.33061 14.0018 3.26679 13.85C3.22713 13.7477 3.16766 13.6543 3.09179 13.575ZM5.83346 6.66667H17.5001C17.7211 6.66667 17.9331 6.57887 18.0894 6.42259C18.2457 6.26631 18.3335 6.05435 18.3335 5.83333C18.3335 5.61232 18.2457 5.40036 18.0894 5.24408C17.9331 5.0878 17.7211 5 17.5001 5H5.83346C5.61244 5 5.40048 5.0878 5.2442 5.24408C5.08792 5.40036 5.00012 5.61232 5.00012 5.83333C5.00012 6.05435 5.08792 6.26631 5.2442 6.42259C5.40048 6.57887 5.61244 6.66667 5.83346 6.66667ZM3.09179 9.40833C2.9746 9.2927 2.82579 9.21437 2.66413 9.18323C2.50248 9.15208 2.33521 9.16952 2.18346 9.23333C2.08247 9.27554 1.98946 9.33472 1.90846 9.40833C1.83259 9.48759 1.77312 9.58104 1.73346 9.68333C1.68937 9.78308 1.6666 9.89094 1.6666 10C1.6666 10.1091 1.68937 10.2169 1.73346 10.3167C1.77566 10.4177 1.83485 10.5107 1.90846 10.5917C1.98946 10.6653 2.08247 10.7245 2.18346 10.7667C2.28321 10.8108 2.39106 10.8335 2.50012 10.8335C2.60918 10.8335 2.71704 10.8108 2.81679 10.7667C2.91778 10.7245 3.01079 10.6653 3.09179 10.5917C3.1654 10.5107 3.22459 10.4177 3.26679 10.3167C3.31088 10.2169 3.33365 10.1091 3.33365 10C3.33365 9.89094 3.31088 9.78308 3.26679 9.68333C3.22713 9.58104 3.16766 9.48759 3.09179 9.40833ZM17.5001 9.16667H5.83346C5.61244 9.16667 5.40048 9.25446 5.2442 9.41074C5.08792 9.56703 5.00012 9.77899 5.00012 10C5.00012 10.221 5.08792 10.433 5.2442 10.5893C5.40048 10.7455 5.61244 10.8333 5.83346 10.8333H17.5001C17.7211 10.8333 17.9331 10.7455 18.0894 10.5893C18.2457 10.433 18.3335 10.221 18.3335 10C18.3335 9.77899 18.2457 9.56703 18.0894 9.41074C17.9331 9.25446 17.7211 9.16667 17.5001 9.16667ZM3.09179 5.24167C3.01254 5.1658 2.91908 5.10633 2.81679 5.06667C2.66503 5.00285 2.49777 4.98542 2.33611 5.01656C2.17445 5.04771 2.02564 5.12604 1.90846 5.24167C1.83485 5.32267 1.77566 5.41568 1.73346 5.51667C1.68937 5.61642 1.6666 5.72427 1.6666 5.83333C1.6666 5.94239 1.68937 6.05025 1.73346 6.15C1.77566 6.25099 1.83485 6.344 1.90846 6.425C1.98946 6.49861 2.08247 6.5578 2.18346 6.6C2.33521 6.66382 2.50248 6.68125 2.66413 6.65011C2.82579 6.61896 2.9746 6.54063 3.09179 6.425C3.1654 6.344 3.22459 6.25099 3.26679 6.15C3.31088 6.05025 3.33365 5.94239 3.33365 5.83333C3.33365 5.72427 3.31088 5.61642 3.26679 5.51667C3.22459 5.41568 3.1654 5.32267 3.09179 5.24167ZM17.5001 13.3333H5.83346C5.61244 13.3333 5.40048 13.4211 5.2442 13.5774C5.08792 13.7337 5.00012 13.9457 5.00012 14.1667C5.00012 14.3877 5.08792 14.5996 5.2442 14.7559C5.40048 14.9122 5.61244 15 5.83346 15H17.5001C17.7211 15 17.9331 14.9122 18.0894 14.7559C18.2457 14.5996 18.3335 14.3877 18.3335 14.1667C18.3335 13.9457 18.2457 13.7337 18.0894 13.5774C17.9331 13.4211 17.7211 13.3333 17.5001 13.3333Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span data-config-id="bradcrumb2">Main Tasks</span>
                    </a>
                  </div>
                  <div class="lg:hidden">
                    <button class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full object-cover object-right"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt=""
                        data-config-id="avatar"
                      />
                    </button>
                  </div>
                  <div class="hidden lg:block">
                    <button class="flex items-center">
                      <div class="mr-3">
                        <p class="text-sm" data-config-id="name">
                          Thomas Brown
                        </p>
                        <p class="text-sm text-gray-500" data-config-id="job">
                          Developer
                        </p>
                      </div>
                      <div class="mr-2">
                        <img
                          class="w-10 h-10 rounded-full object-cover object-right"
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                          alt=""
                          data-config-id="avatar"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </nav>
            </section>

            <section
              data-section-id="3"
              data-share=""
              data-category="ta-content"
              data-component-id="eb4ba9ec_02_awz"
              class="py-8 px-6"
            >
              {props.children}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
