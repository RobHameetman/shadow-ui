import React, { FC } from "react";
import { SuiButtonProps } from "@shadow-ui/button";

export * from "@shadow-ui/button";

export const SuiButton: FC<SuiButtonProps> = ({
	as,
	color,
	disabled,
	fullWidth,
	label,
	secondary
}) => {
	return (
		<sui-button
			as={as}
			color={color}
			disabled={disabled}
			fullWidth={fullWidth}
			label={label}
			secondary={secondary}
		/>
	);
};
