# Ratelio

Landing page for a Fintech & Blockchain project: "Implement bright ideas for your project with a professional Fintech & Blockchain development team".

Frontend only (React + Gatsby), no backend. Built in 2022.

Live demo: https://un-a.github.io/ratelio/

## 🚀 Getting started

This project was built with **Node 16** (Gatsby 4). Using nvm is recommended:

\`\`\`bash
nvm use 16.20.2
yarn install
\`\`\`

Start the development server:

\`\`\`bash
yarn develop
\`\`\`

Your site will be running at `http://localhost:8000`.

You'll also have access to `http://localhost:8000/___graphql` — a tool for exploring the data layer and experimenting with GraphQL queries.

## 📦 Build

\`\`\`bash
yarn build
\`\`\`

The static output will be generated in the `public` folder.

## 🌐 Deploy to GitHub Pages

\`\`\`bash
yarn deploy
\`\`\`

## 🧐 Project structure

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package.json
    ├── yarn.lock
    └── README.md

- **`/src`** — source code: pages, components, constants, containers, styles, images, fonts
- **`gatsby-config.js`** — main Gatsby config (site metadata, plugins, pathPrefix)
- **`gatsby-node.js`** / **`gatsby-browser.js`** / **`gatsby-ssr.js`** — files for customizing the build process, browser runtime, and SSR respectively (used when extended Gatsby API logic is needed)

## 🎓 Gatsby documentation

- [Tutorial](https://www.gatsbyjs.com/tutorial/)
- [Docs](https://www.gatsbyjs.com/docs/)