import { registerPartials, registerHelpers, getPageByPath } from "./providers";
import styles from "./styles/index.css";

function app() {
  registerHelpers();
  registerPartials();

  const path = window.location.pathname;
  const page = getPageByPath(path);

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app");
    root.innerHTML = page();
  });
}

export default app;
