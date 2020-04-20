import {
	html,
	LitElement,
	property,
	TemplateResult,
	CSSResult
} from "lit-element";
import { styles } from "./Button.styles";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { classes as cx } from "./@shadow-ui/utils";

enum SuiColorNames {
	blue = "blue",
	orange = "orange",
	navy = "navy",
	grey = "grey",
	white = "white",
	black = "black"
}

export interface SuiButtonProps {
	as?: string;
	color?: string;
	disabled?: boolean;
	fullWidth?: boolean;
	label?: string;
	secondary?: boolean;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"sui-button": DetailedHTMLProps<SuiButtonAttributes, HTMLButtonElement>;
		}

		interface SuiButtonAttributes
			extends SuiButtonProps,
				HTMLAttributes<HTMLButtonElement> {}
	}
}

export class SuiButton extends LitElement {
	static get styles(): CSSResult {
		return styles;
	}

	@property({ type: String }) as = "button";
	@property({ type: String }) color = SuiColorNames.blue;
	@property({ type: Boolean }) disabled = false;
	@property({ type: Boolean }) fullWidth = false;
	@property({ type: String }) label: string | undefined;
	@property({ type: Boolean }) secondary = false;

	constructor() {
		super();
	}

	get buttonClasses(): string {
		return cx({
			blue: this.color === SuiColorNames.blue,
			secondary: this.secondary
		});
	}

	handleClick = (e: MouseEvent): void => {
		if (this.disabled) {
			e.preventDefault();
		}
	};

	render(): TemplateResult {
		const { label } = this;

		return html`
			<button
				class="${this.buttonClasses}"
				?disabled="${this.disabled}"
				@click=${this.handleClick}
			>
				${label
					? label
					: html`
							<slot />
					  `}
			</button>
		`;
	}
}
