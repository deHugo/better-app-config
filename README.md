# Better App Config

## Purpose

This module tries to improve upon the 'config' npm module by adding getter functions, runtime config modifications, and default config values.

## Installation

From your project's root, run the following.

```bash
npm install --save better-app-config
```

## Usage

Require the module and then pass it a reference to your app. It will attach itself to `app.config` by default.

```javascript
const config  = require("better-app-config")
const express = require("express")

const app = express()


config(app)
```
To set defaults, call the `defaults` method, passing it the path and the defaults.

```javascript
app.config.defaults("log_level", "info")
app.config.defaults("server", {
	hostname: "localhost",
	port: 8080,
	protocol: "http:"
})
```

To retrieve a config value, use the `get` method and pass the path of the config.

```javascript
let jwtConfig = app.config.get("jwt.options")
```