module.exports = {
	globDirectory: '/',
	globPatterns: [
		'**/*.{png,jpg,html,css,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};