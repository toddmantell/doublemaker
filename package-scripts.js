module.exports = {
	scripts: {
		default: 'npm start',
		build: 'babel src/ -d lib/',
		test: {
			default: 'jest',
			watch: 'jest --watch'
		},
		flow: 'flow'
	}
}