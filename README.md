# tds-1

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

Project's Node version: 22.4.0

Add file `.env` where you put API_KEY which you can get from: [https://currencybeacon.com](https://currencybeacon.com/register). Then add new variable named `VITE_API_KEY` and set the value to API_KEY. In example:

```
VITE_API_KEY=ABC123
```

Then install all dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
