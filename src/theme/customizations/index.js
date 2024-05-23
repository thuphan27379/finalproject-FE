import Card from "./Card";
import Tabs from "./Tabs";
import Link from "./Link";

// index for custom components
function customizeComponents(theme) {
  return { ...Tabs(theme), ...Card(theme), ...Link(theme) };
}

export default customizeComponents;
