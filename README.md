# Test Health Web App

Health Web App Test build with ReactJS + TailwindCSS.

## Requirements

[NodeJs](https://nodejs.org/en/) ^16.14.0  
npm ^8.19.2

## Technologies

- [Vite](https://vitejs.dev) to build project
- [React](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v3](https://tailwindcss.com) css framework
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- and some libraries:
  - [React Router V6](https://reactrouter.com/en/main) client side routing
  - [React Query](https://tanstack.com/query/latest/docs/react/overview) and [axios](https://axios-http.com/) handle API
  - fontsource get font for project
  - recharts for handle chart/graph 
  - ...

## Getting started

#### Installation

Using NPM:

```bash
$ npm install
```

Using Yarn:

```bash
$ yarn
```

#### Development

```bash
yarn start
```

if you want to run with another port, add `--port PORT`

```bash
yarn start --port 9000
```

Then open your browser and view the URL: `http://localhost:3000` (default port)

## Overview

There are three pages with following link below:

- [Top Page](http://localhost:3000)
- [My Record Page](http://localhost:3000/my-records)
- [Column Page](http://localhost:3000/columns)

Other routers will go to NotFoundPage

## Folder Structure

```
health-app
└── src
    ├── api # communication with API
    ├── assets # images, scss
    ├── components # components use in project
    ├── configs # all configuration
    ├── constants
    ├── data # test data
    ├── layouts # route layouts
    ├── pages # all pages base on route
    ├── utils # utility functions
    ├── App.tsx
    ├── index.css
    ├── main.tsx
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .favicon.ico
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.eslint.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn.lock
```

## LICENSE

MIT License  
Project Test - Copyright (c) 2023 Nhon Nguyen
