<h1 align="center">Welcome to Typescript-restServer 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="create a folder called db (database), which will contain a configuration file for the database itself and its respective models { import { Sequelize } from 'sequelize';" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Project made with typescript, together with sequalize and express to create the server

### 🏠 [Homepage](app.ts)

## Install

```sh
npm install
```

## Usage

```sh
node dist/app | tsc --watch
```

### Configure database and its respective models

## additional configuration

```
import { Sequelize } from 'sequelize';

const db = new Sequelize('db', 'name', 'password', {
	host: 'localhost',
	dialect: 'mysql',
});

export default db;

```

## Run tests

```sh
npm run test
```

## Author

👤 **Orlandis Cuevas**

- Website: orlandisdev.com
- Github: [@orlandisCS](https://github.com/orlandisCS)
- LinkedIn: [@orlandisdev](https://linkedin.com/in/orlandisdev)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
