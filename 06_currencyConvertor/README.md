# React + Vite + Tailwind

## Setup

Commands used below for setup

`pnpm create vite@latest . --template react`

`pnpm i`

---

Adding Tailwind to the project

`pnpm install -D tailwindcss postcss autoprefixer`

`pnpx tailwindcss init -p`

Then in the `tailwind.config.js` file changed the following:

```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

Add the Tailwind directives to `./src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

Now Let's Go!

`pnpm run dev`
