/* global window */
import {
	addParameters,
	addDecorator,
	setCustomElements,
	withA11y
} from "@open-wc/demoing-storybook";
// import theme from "@shadow-ui/storybook-theme";
import theme from "./__tmptheme";

addDecorator(withA11y);

addParameters({
	a11y: {
		config: {},
		options: {
			checks: {
				"color-contrast": {
					options: {
						noScroll: true
					}
				}
			},
			restoreScroll: true
		}
	},
	docs: {
		iframeHeight: "200px"
	},
	options: {
		theme
	}
});

async function run() {
	const $customElements = await (
		await fetch(new URL("./custom-elements.json", import.meta.url))
	).json();

	setCustomElements($customElements);
}

run();
