"use strict"

import configLib from "config"

export default class BetterConfig {
	constructor(app) {
		if (app) {
			app.config = this
		}

		const options = Object.assign({}, JSON.parse(JSON.stringify(configLib)))
		this.options = options

		console.log(this)
	}

	get (configPath) {
		return getProperty(this, configPath)
	}
}

function getProperty (start, path) {
	const parts = path.split(".")
	const ref = start[parts[0]]

	if (type ref !== "object" || parts.length <= 1) {
		return ref
	}

	return getProperty(ref, parts.slice(1))
}