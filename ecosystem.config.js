module.exports = {
	apps: [
		{
			name: "app-name",
			script: "yarn",
			args: "start",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
