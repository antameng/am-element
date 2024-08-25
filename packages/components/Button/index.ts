import Button from "./Button.vue";
import { withInstaller } from "@am-element/utils"
import ButtonGroup from "./ButtonGroup.vue";

export const AmButton = withInstaller(Button)
export const AmButtonGroup = withInstaller(ButtonGroup)
export * from "./types.ts"
