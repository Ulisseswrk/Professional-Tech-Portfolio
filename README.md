# Professional Tech Portfolio

A clean, responsive personal portfolio built with React, Vite and Tailwind CSS. It includes routing, a projects listing (cards link to GitHub), a contact form, dark mode toggle, and a simple component structure to customize.

This README covers how to run the project, where to customize content, and a few tips for working with the Tailwind + Vite setup on Windows.

---

## Features

- React + Vite fast dev experience
- Tailwind CSS utilities with a small custom screen config
- React Router-based pages: Home, Projects, Contact
- Projects grid where each card opens the project's GitHub (or provided link)
- Contact form (client-side alert on submit)
- Dark mode toggle (persists to localStorage)
- Simple components: NavBar, Footer, DarkMode button, LinkAnimado
- Responsive layout with a custom `max-1150` breakpoint

---

## Quick start (Windows - cmd)

1. Install dependencies (run in the repository root):

```cmd
npm install
```

2. Start the dev server:

```cmd
npm run dev
```

3. Open the URL printed by Vite (typically `http://localhost:5173`).

Build for production:

```cmd
npm run build
```

Preview production build locally:

```cmd
npm run preview
```

Lint the project:

```cmd
npm run lint
```

---

## Project structure (key files)

- `src/main.jsx` — App entry, wraps App with BrowserRouter and ThemeProvider
- `src/App.jsx` — Top-level routes and page layout (NavBar, Footer)
- `src/pages/Home.jsx` — Home / hero and "About / Sobre Mim" section
- `src/pages/Projetos.jsx` — Projects listing (cards link externally to `github` field)
- `src/pages/Contato.jsx` — Contact form
- `src/pages/DetalheProjeto.jsx` — (removed/stub) project detail page; project cards now open GitHub
- `src/components/NavBar.jsx` — navigation and dark mode button
- `src/components/DarkMode.jsx` — toggle button (uses ThemeContext)
- `src/components/LinkAnimado.jsx` — animated underline link (supports internal `to` or external `href`)
- `src/components/Footer.jsx` — footer + social links (edit here for Github/LinkedIn)
- `src/context/ThemeContext.jsx` — theme provider & localStorage persistence
- `tailwind.config.js` — Tailwind configuration (includes `darkMode: 'class'` and `max-1150` screen)

---

## How to customize

- Change social links (GitHub/LinkedIn):
	- `src/components/Footer.jsx` — edit `socialLinks` array.

- Update projects list (title, description, image, github link):
	- `src/pages/Projetos.jsx` — `listaprojetos` array. Each project item may include `id`, `title`, `description`, `tags`, `image`, `github`.

- Home hero image and about image:
	- `src/pages/Home.jsx` — image references like `/boneco-ulisses.png` and `/eu-site.jpg`. Replace files in `public/` or update the path.

- Link underline animation:
	- `src/components/LinkAnimado.jsx` — the component uses `Link` when passed a `to` prop and fallbacks to `<a href>` for external links. You can change the Tailwind pseudo classes there to tune the underline.

- Dark mode behavior:
	- `src/context/ThemeContext.jsx` — controls initial state and persistence. The application adds/removes the `dark` class on `<html>` and Tailwind is configured with `darkMode: 'class'` so `dark:` variants will apply.

---

## Accessibility & keyboard navigation

- Project cards include `focus` styles (ring) for keyboard users.
- The dark mode toggle is a button with an `aria-label`. You can add more accessible labels or text if required.

---

## Notes & tips

- Tailwind is configured to use class-based dark mode (`darkMode: 'class'`). That means when the `dark` class is present on `<html>` the `dark:` variants activate. The `ThemeContext` toggles this class and persists the value in `localStorage`.

- If you change Tailwind config (breakpoints, colors), restart the dev server.

- Images referenced as `/filename.ext` should be placed in the `public/` folder so Vite serves them as static assets.

- The project was built to be simple to edit: most content is in page files and small arrays so adding projects or changing text is straightforward.

---

## Common troubleshooting

- If Tailwind classes are not applied, ensure `tailwind.config.js` includes `./src/**/*.{js,jsx,ts,tsx}` in `content` and that your `index.css` imports `@tailwind base; @tailwind components; @tailwind utilities;`.
- If `npm run dev` fails on Windows due to policy or environment issues, try running in a `cmd` shell (not PowerShell), or check Node and npm versions.

---

If you want, I can:
- Add a `README` section for deployment (Netlify / Vercel) with recommended settings.
- Improve the dark palette in `tailwind.config.js` (custom colors) and update components to use them.
- Add a small CONTRIBUTING or DEVELOPMENT guide with code style and linting rules.

Would you like any of those additions? If not, this README is ready and saved to the project root as `README.md`.
# meu-portfolio
My portfolio focused on Data Science. It gathers all my practical projects developed during my studies. The page was built using Vite, React, and Tailwind CSS to ensure performance, responsiveness, and a modern UI.
