import { customElement } from "lit-element";
import { SuiButton as SuiButtonComponent } from "./Button";

export * from "./Button";

@customElement("sui-button")
export class SuiButton extends SuiButtonComponent {}
