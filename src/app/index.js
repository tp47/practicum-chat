import Handlebars from "handlebars/runtime";
import loginPage from "@/pages/login/loginPage.hbs";
import modal from "@/shared/ui/modal/modal.hbs";
import registerPartials from "./providers/registerPartials";
import registerHelpers from "./providers/registerHelpers";
import styles from "./styles/index.css";

function app() {
  registerHelpers();
  registerPartials();
  document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const root = document.querySelector("#app");
    const result = loginPage();
    root.innerHTML = result;
  });
}

export default app;
