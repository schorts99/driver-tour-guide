# 🧭 DriverTourGuide

A framework-agnostic guided tour adapter built on top of [`driver.js`](https://driverjs.com/), designed to work seamlessly with the TourGuide abstraction from [`@schorts/shared-kernel`](https://github.com/schorts99/shared-kernel). Compose onboarding flows with type-safe steps and launch interactive UI tours with minimal setup.

## 🚀 Installation

```bash
npm install --save @schorts/driver-tour-guide
```

## 📦 Usage

### 1. Import styles

[`driver.js`](https://driverjs.com/) requires its CSS to be loaded. You can import it directly from this package:

```ts
import "@schorts/driver-tour-guide/driver-styles";
```

Or inject it dynamically (optional):

```ts
import { injectDriverStyles } from "@schorts/driver-tour-guide"

injectDriverStyles();
```

### 2. Create and start a tour

```ts
import { Driver, DriverTourGuide } from "@schorts/driver-tour-guide";
import { TourStep } from "@schorts/shared-kernel";

const steps: TourStep[] = [
  {
    title: "Welcome",
    description: "This is the starting point",
    side: "BOTTOM",
    align: "CENTER",
  },
  {
    element: "#next-button",
    title: "Next Step",
    description: "Click here to continue",
    side: "RIGHT",
    align: "START",
  },
];

const tour = new DriverTourGuide(new Driver());

steps.forEach((step) => tour.addStep(step));

tour.startTour();
```

## 🧱 API

### `DriverTourGuide`

Implements the `TourGuide` interface from `@schorts/shared-kernel`.

### Methods

`addStep(step: TourStep)`: TourGuide — Adds a single step to the tour.

`startTour(): void` — Launches the tour using `driver.js`.

### 🧩 TourStep

Defined in `@schorts/shared-kernel`:

```ts
type TourStep = {
  element?: string;
  title: string;
  description: string;
  side: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
  align: "START" | "CENTER" | "END";
}
```

## 🧠 Philosophy

- **Type-safe:** Built on strongly typed abstractions.
- **Composable:** Chainable API for fluent tour composition.
- **Framework-agnostic:** Works with React, Svelte, Vue, or vanilla JS.
- **Extensible:** Swap out Driver.js or customize behavior without changing your domain model.

## 📜 License

LGPL
