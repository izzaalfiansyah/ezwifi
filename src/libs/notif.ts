const strokes = {
  info: "stroke-info",
  error: "stroke-error",
  success: "stroke-success",
};

export default (message: string, type: keyof typeof strokes) => {
  const toast = document.createElement("div");
  toast.className = "toast toast-top toast-end";
  toast.innerHTML = `
  <div class="alert shadow-lg bg-white max-w-full w-auto">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="${strokes[type]} flex-shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>${message}</span>
    </div>
  </div>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};
