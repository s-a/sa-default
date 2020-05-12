const assert = require('assert')
const Config = require('./../lib/index.js')

describe('Configuration Module', function () {
	it('should not extend given configuration with defaults if value exist', async function () {
		const defaults = {
			a: 1
		}
		const custom = {
			a: 2
		}
		const config = new Config(defaults, custom)
		assert.deepStrictEqual(config, {
			a: 2
		})
	})

	it('should extend given configuration with defaults if value does not exist', async function () {
		const defaults = {
			a: 1,
			c: 5
		}
		const custom = {
			c: 2
		}
		const config = new Config(defaults, custom)
		assert.deepStrictEqual(config, {
			c: 2,
			a: 1
		})
	})

	it('should use default configuration if config is null', async function () {
		const defaults = {
			a: 1,
			c: 5
		}
		const config = new Config(defaults, null)
		assert.deepStrictEqual(config, {
			c: 5,
			a: 1
		})
	})

	it('should use default configuration if no config exists', async function () {
		const defaults = {
			a: 1,
			c: 5
		}
		const config = new Config(defaults)
		assert.deepStrictEqual(config, {
			c: 5,
			a: 1
		})
	})
})