# Type definitions

```
pnpm add -D @types/markdown-it @types/react @types/react-dom @types/sanitize-html
```

# `react` and `solid` are added with astro cli

```
npx astro add react solid
```

after config changes, go back to tsconfig and make these changes 

```js
// <!-- for compiler options -->
jsx: "preserve", // it was 'react-jsx'
jsxImportSource: "solid-js" // it was 'react'
```

**BUT IT IS UP TO YOU** (iF YOU THINK YOUR APP WILL HAVE MORE REACT COMPONENTS THAN SOLID ONE, USE react AS jsxImportSource)

OVERRIDING WILL BE DONE PER FILE BASIS

WE OVERRIDE BY ADDING PRAGMA (I BEILIVE IT IS CALLED PRAGMA) INSIDE COMPONENT FILE

```tsx
/** @jsxImportSource react */
```

SO `.tsx` FILES 'WILL BE' SOLID COMPONENTS BY DEFAULT (OFCOURSE WE WILL ALSO USE ONLY SOLID-JS FEATURES THERE), AND WHEN WE USE MENTIONED PRAGMA, WE CAN BUILD REACT COMPONENTS INSIDE THOSE FILES

**WHEN WE ARE RENDERING REACT OR SOLID COMPONENT, AND WE WANT FOR THIS COMPONENT TO BE CLIENT COMPONENT (TO HAVE JAVASCRIPT), WE ARE USING `client:only` DIRECTIVE, AND SINCE WE ARE USING REACT AND SOLID WE ARE DOING IT LIKE THIS (`client:only="solid-js"` FOR SOLID COMPONENT AND `client:only="REACR"` FOR REACT COMPONENT)**

ALSO IF WE DISABLE JAVASCRIPT, ALL CLIENT COMPONENTS WILL NOT BE ON THE PAGE WWHICH IS PRETTY NEAT

# Content Collections

Read about [Content Collections](https://docs.astro.build/en/guides/content-collections/)


# Some problems with types I encounter

For example, module "astro:content" was undefined

I was able to fix this by running

```
pnpm astro sync
```

https://docs.astro.build/en/reference/cli-reference/#astro-sync

# Hybrid rendering

So by default astro is static site generator (all pages are statically pre-rendered)

To be precise, we can set our app to be ssr or to be static-prerender (which is default), in those case if some page nedds to be prerendered or it needs to be ssr, we can opt in into hybrid rendering where enteire site has one type of rendering and some pages have enabled different type of rendering

We ca make our site completely [server side rendered](https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project) by altering config

But we can also [configure individual routes](https://docs.astro.build/en/guides/server-side-rendering/#configuring-individual-routes) to opt out of pre-rendering

# Before deployment (this time on netlify)

```
pnpm astro add netlify
```


***
***
***
***
***
***
***

# Astro Starter Kit: Basics

BOOTSTRAPED WITH

```
pnpm create astro
```

or

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
