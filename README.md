# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Bar Books Games

## Description


### Project structure

Under `src` are the main files used

- components - includes feature components as well as ui components
- lib - different libraries to be used for the app (types, mocks, utils)
- pages - page components

### Libraries

These are the main libraries used for this project:

- vite - an alternative to create-react-app with minimal app templating
- @primer/octicons-react - icons by github
- prettier - code formatter
- vitest - testing framework

## How to Use the Project

- open terminal
- insall dependencies

```bash
	npm install
```

- run application

```bash
	npm run dev
```

### To run test

- open termianl
- run test script

```bash
	npm run test
```

## Future upgrades