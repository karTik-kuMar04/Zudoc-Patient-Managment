# Zudoc Patient Treatment Journey Dashboard

Production-oriented healthcare journey dashboard built with React, TypeScript, Vite, Tailwind CSS, and React Router v6.

## Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (`darkMode` via class variant)
- React Router v6
- Lucide React icons

## Project Structure

```text
src/
  components/
    ui/           Reusable primitives (Button, Card, Input, Skeleton, StatusBadge)
    layout/       Sidebar, Header, AppLayout
    dashboard/    MiniDashboard summary card
    journey/      JourneyList, JourneyDetail, Timeline
    staff/        StaffActionPanel
  context/        Toast + Theme providers
  pages/          Route pages
  data/           Mock patients and stage definitions
  hooks/          Data and context hooks
  types/          TypeScript interfaces and types
  utils/          Formatting helpers
  App.tsx         Lazy routes
  main.tsx        App bootstrap
```

## Design Decisions

- **Healthcare-first visual language:** Indigo actions, emerald success, amber warnings, and rose critical indicators are paired with text labels so color is never the only state signal.
- **Reliable loading UX:** Dedicated skeleton states exist for dashboard cards, patient list rows, and journey timeline views.
- **Local optimistic workflow:** Staff actions update patient state immediately in the detail page while displaying lightweight custom toast feedback.
- **Extensible component boundaries:** UI primitives, page containers, and domain-specific components are separated to keep files focused and maintainable.
- **Accessible interactions:** Buttons/inputs include `aria-label`s, semantic sections are used across pages, and focus-visible rings are enabled on controls.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
