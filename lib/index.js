const extend = require('extend')

function Config(defaultConfiguration, customConfiguration) {
	let configuration = {}
	if (customConfiguration) {
		extend(configuration, defaultConfiguration, customConfiguration)
	} else {
		configuration = defaultConfiguration
	}

	return configuration
}

module.exports = Config