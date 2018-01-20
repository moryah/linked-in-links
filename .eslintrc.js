module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "document": false,
    "window": true,
    "ReactDOM": true
  },
  "rules": {
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "prop-types": [true],
    "react/jsx-uses-vars": [2]
  },
  "plugins": [
    "react"
  ],
  "extends": ["airbnb-base"]
}
