export const classes = (...args: Array<unknown>): string => {
	return args
		.filter(arg => Boolean(arg))
		.reduce<Array<string>>((classNames, arg) => {
			const additionalClasses: Array<string> = [];

			switch (typeof arg) {
				case "string":
				case "number":
					additionalClasses.push(String(arg));
					break;
				case "object":
					if (Array.isArray(arg) && arg.length) {
						additionalClasses.push(classes(...arg));
					} else if (
						arg !== null &&
						arg.toString !== Object.prototype.toString
					) {
						additionalClasses.push(arg.toString());
					} else if (arg !== null) {
						Object.keys(arg)
							.filter(key => key in { ...arg } && arg[key])
							.forEach(key => additionalClasses.push(key));
					}

					break;
				default:
					break;
			}

			return [...classNames, ...additionalClasses];
		}, [])
		.join(" ");
};
