import Handlebars from "handlebars/runtime";
import buttonRed from "@/shared/ui/button/buttonRed.hbs";
import button from "@/shared/ui/button/button.hbs";
import modal from "@/shared/ui/modal/modal.hbs";
import textField from "@/shared/ui/textField/textField.hbs";
import basicLayout from "@/app/layouts/basicLayout.hbs";
import userImage from "@/shared/ui/userImage/userImage.hbs";
import infoList from "@/shared/ui/infoList/infoList.hbs";
import listItem from "@/shared/ui/listItem/listItem.hbs";
import listItemInfo from "@/shared/ui/listItem/listItem.info.hbs";
import actionsList from "@/shared/ui/actionsList/actionsList.hbs";

function registerPartials() {
  Handlebars.registerPartial("button/red", buttonRed);
  Handlebars.registerPartial("button", button);
  Handlebars.registerPartial("modal", modal);
  Handlebars.registerPartial("textField", textField);
  Handlebars.registerPartial("layout", basicLayout);
  Handlebars.registerPartial("userImage", userImage);
  Handlebars.registerPartial("infoList", infoList);
  Handlebars.registerPartial("listItem", listItem);
  Handlebars.registerPartial("listItem/info", listItemInfo);
  Handlebars.registerPartial("actionsList", actionsList);
}

export { registerPartials };
