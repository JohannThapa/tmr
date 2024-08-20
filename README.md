# TMR Portfolio

Dynamic Angular user portfolio with real-time weather and crypto data. Built with Tailwind CSS & chart.js for speed and style.

## Installation

Install `pnpm` sing `npm`

```bash
npm install -g pnpm
// or
npm install -g @pnpm/exe
```

install packages

```bash
pnpm install
```

run application

```bash
ng serve
```

## Tech Stack

**Client:** Angular, TailwindCSS, Apache


## Features

- Light/dark mode toggle
- Theme color modes
- Fullscreen mode
- Cross platform
- Responsive
- Animation

## Running Tests

To run tests, run the following command

```bash
  ng test
```

## Running Prettier

To run prettier, run the following command

```bash
  pnpm run prettier
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

#### Features

- [x] Sidebar
- [x] Dark Theme
- [x] Navbar
- [x] Footer
- [x] Dashboard Module
- [x] Standalone components
- [x] Angular Signals
- [x] Multi Theme
- [x] Tests E2E
- [ ] User Module
- [ ] Guards
- [x] Animations

#### Commands

| command                   | What it does?                                 |
| ------------------------- | :-------------------------------------------- |
| `npm start`               | Starts the server in dev mode                 |
| `npm run lint`            | Runs ESLint on project                        |
| `npm run prettier`        | Runs prettier on entire src folder            |
| `npm run prettier:verify` | Runs prettier-check and throws error if fails |
| `npm run prettier:staged` | Runs prettier on only staged (changed) files  |
| `npm run e2e-ui`          | Runs playwright e2e test with UI              |
