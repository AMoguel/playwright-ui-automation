# Playwright UI Automation Portfolio

A modular end-to-end UI regression testing suite built with **Playwright** and **TypeScript**, targeting the [Bondar Academy UI Playground](https://bondaracademy.com).

This repository is structured using a **feature-sliced test architecture**—separating test specs by application section so individual modules can be executed in isolation during debugging or combined into a full cross-browser regression suite.

---

## Key Automation Practices Demonstrated

* **Parent-to-Child Locator Chaining:** Scoping locators inside specific container elements (`nb-card`) to isolate duplicate form labels (`Email`, `Password`, `Submit`, `Sign in`) and prevent strict-mode violations.
* **Flake-Resistant Selectors:** Prioritizing user-facing locators (`getByRole`, `getByPlaceholder`, `getByText`) and storing parent containers in `const` variables for clean, maintainable test blocks.
* **Functional & Negative Validation Testing:** Verifying happy-path submissions alongside form validation rules, disabled button states, and field constraints across Form Layouts and Authentication flows.
* **Modular Test Organization:** Grouping test files into dedicated section folders (`forms/`, `auth/`) to mirror production QA team workflows and enable parallel worker execution.
* **CI/CD Pipeline Integration:** Automated test execution via **GitHub Actions** on code pushes and pull requests.

---

## Project Structure

```text
playwright-ui-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI workflow
├── tests/
│   ├── forms/                    # Form component & layout regression specs
│   │   └── form-layouts.spec.ts
│   └── auth/                     # Authentication & validation specs (in progress)
├── playwright.config.ts          # Playwright browser, timeout & reporting config
├── package.json                  # Project dependencies & scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── README.md                     # Project documentation
```

---

## Prerequisites

* [Node.js](https://nodejs.org) (v18 or higher recommended)
* npm (included with Node.js)

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd playwright-ui-automation
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install --with-deps
   ```

---

## Running Tests

* **Run the full regression suite (all browsers):**
  ```bash
  npx playwright test
  ```

* **Run tests on Chromium only (faster local feedback):**
  ```bash
  npx playwright test --project=chromium
  ```

* **Run a specific feature folder:**
  ```bash
  npx playwright test tests/forms
  ```

* **Run a single spec file:**
  ```bash
  npx playwright test tests/forms/form-layouts.spec.ts
  ```

* **Run tests in interactive UI mode:**
  ```bash
  npx playwright test --ui
  ```

* **Open the HTML test report after a run:**
  ```bash
  npx playwright show-report
  ```

---

## Roadmap & Upcoming Coverage

* [x] **Forms:** Form Layouts (Inline Form, Using the Grid, Basic Form, Form Without Labels)
* [ ] **Forms:** Remaining Form Layouts & Datepicker components
* [ ] **Auth:** Login, Register, Request Password, and Reset Password validation flows
* [ ] **Modal & Overlays:** Dialogs, Windows, Popovers, Toastr notifications, and Tooltips
* [ ] **Tables & Data:** Smart Table CRUD operations and Tree Grid filtering
* [ ] **Architecture:** Refactoring repeated page interactions into a Page Object Model (POM)
