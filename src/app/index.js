import Handlebars from "handlebars/runtime";
import button from "@/shared/ui/button.hbs";

function app() {
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app");

    const result = button({ label: "test" });

    root.innerHTML = result;
  });
}

export default app;
