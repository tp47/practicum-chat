import Handlebars from "handlebars/runtime";
import buttonRed from "@/shared/ui/button/buttonRed.hbs";
import button from "@/shared/ui/button/button.hbs";
import modal from "@/shared/ui/modal/modal.hbs";
import textField from "@/shared/ui/textField/textField.hbs";
import basicLayout from "@/app/layouts/basicLayout.hbs";

function registerPartials() {
  Handlebars.registerPartial("button/red", buttonRed);
  Handlebars.registerPartial("button", button);
  Handlebars.registerPartial("modal", modal);
  Handlebars.registerPartial("textField", textField);
  Handlebars.registerPartial("layout", basicLayout);
}

export default registerPartials;
