# Unit Testing Practices in Next.js

This repository serves as a proof-of-concept and a reference guide for setting up robust unit testing in a modern Next.js project. It demonstrates how to properly configure and use **Jest**, **React Testing Library**, and **Mock Service Worker (MSW) v2**.

## Goal

We need a strong and easy-to-use unit testing setup for our new Next.js projects. To keep our code quality high and catch bugs early, we use a **Side-by-Side Workflow**. This means developers write unit tests at the same time they build new features.

## Tools Used

- **Test Runner**: Jest (using the built-in Next.js configuration)
- **UI Testing**: React Testing Library (to test how things look and behave)
- **API Mocking**: Mock Service Worker (MSW) (to fake API responses)

## Configuration Notes

Modern MSW v2 relies on native Node 18+ Web APIs, which conflict with Jest's default JSDOM environment. We solved this with two specific setups in this repository:

1. **Global Fixes (Polyfills)**:
   A `jest.polyfills.ts` file adds missing web features (like `fetch`, `Request`, and streams) to the Jest environment so MSW can mock APIs properly without crashing.
2. **JavaScript Import Errors**:
   `jest.config.js` is configured to allow Jest to read modern JavaScript packages by overriding the `transformIgnorePatterns` setting.

## Testing Rules for Developers

1. **Testing UI Components**:
   - Test the app like a real user. Test what the user sees (text) and what the user does (button clicks).
   - Do not test the internal code state of the component.
   - **Example**: If a component needs a function (like `onClick`), pass a fake spy function using `jest.fn()` so you can check if the button was clicked.

2. **Testing APIs and Data**:
   - Do not fake `fetch` or `axios` manually.
   - Use MSW to handle network requests. This lets us test our code exactly as if it were talking to a real backend server.

3. **Testing Pure Functions**:
   - Keep business logic separate from UI when possible, and test those functions normally with Jest.

## Daily Workflow

- **Test Folder Structure**: All test files and testing materials must be placed inside the central `src/__tests__/` directory.
- **Side-by-Side Coding**: Whenever you write a new component, function, or API route, you must also write a `.test.ts` or `.test.tsx` file for it inside `src/__tests__/` in the same PR.
- **Automated Checks / Local Hooks**: Always run `npm run test` before pushing code to the repository. CI pipelines will block merges if tests fail.

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the unit tests:

```bash
npm run test
```

Start the development server:

```bash
npm run dev
```
