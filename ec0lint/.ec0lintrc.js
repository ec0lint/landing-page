module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "ec0lint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "lighter-image-formats": "error",
        "lighter-http": "error"
    }
}
