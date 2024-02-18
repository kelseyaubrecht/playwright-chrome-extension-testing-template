![ ](https://github.com/kelseyaubrecht/playwright-extension-testing-template/actions/workflows/test_playwright.yml/badge.svg)

# Playwright extension testing template

This project serves as a template for testing chrome extensions using Playwright.

## Contents

- [Getting started](#getting-started)
- [Run tests](#run-tests)
- [Useful links](#useful-links)
- [Example extension](#example-extension)
- [GitHub Action](github-action)

## Getting started

To set up the environment for the first time run:

- `yarn`
- `yarn playwright install chromium`

## Run tests

To execute all tests use:

- `yarn playwright test`

## Useful links

- [Playwright Extension Testing](https://playwright.dev/docs/chrome-extensions)
- [Playwright CLI](https://playwright.dev/docs/test-cli)
- [Playwright in VSCode](https://playwright.dev/docs/getting-started-vscode)

## Example extension

The project contains a rudimentary extension to demonstrate use in tests.

[Extension](extension) contents:

- index with title and current date
- script that loads current date
- background script to launch service worker (necessary to retrieve the extensionID via fixture)
- content script that adds a \<div>testDivText\</div> to any visited site

## GitHub Action

An [example workflow](.github/workflows/test_playwright.yml) to show running playwright tests with an extension in GitHub Actions.
The installs dependencies, runs the tests, and uploads the report.


## Troubleshooting and tips

### Failed to get extension ID (extension has no service worker)
You may encounter this error if the extension under test does not launch a service worker.
The extensionTest fixture uses the extension's service workers to retrieve it's ID.
```
Error: browserContext.waitForEvent: Timeout 15000ms exceeded while waiting for event "serviceworker"
```
To fix add a background script to the manifest. Example in [./extension/manifest.json](extension/manifest.json) and [./extension/background.js](extension/background.js).
```
"background": {
    "service_worker": "background.js"
}
```
Alternatively you can retrieve the extension ID by navigating to `chrome://extensions/` and enabling Developer mode.
