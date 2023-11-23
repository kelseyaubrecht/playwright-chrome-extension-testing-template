# Playwright extension testing template

This project serves as a template for testing chrome extensions using Playwright.

## Contents

- [Getting started](#getting-started)
- [Run tests](#run-tests)
- [Useful links](#useful-links)
- [Example extension](#example-extension)

## Getting started

To set up the environment for the first time run:

- `yarn`
- `yarn install chromium`

## Run tests

To execute all tests use:

- `yarn playwright test`

## Useful links

- [Playwright Extension Testing](https://playwright.dev/docs/chrome-extensions)
- [Playwright CLI](https://playwright.dev/docs/test-cli)
- [Playwright in VSCode](https://playwright.dev/docs/getting-started-vscode)

## Example extension

[extension](extension)

The project contains a rudimentary extension to demonstrate test runs.
Contents:

- index with title and current date
- script that loads current date
- background script to launch service worker (necessary to retrieve the extensionID via fixture)
- content script that adds a \<div>testDivText\</div> to any visited site
