import { test, expect } from 'fixtures/extensionTest'

test.describe('example extension', () => {
  test('open and check index page', async ({ page, extensionId }) => {
    await page.goto(`chrome-extension://${extensionId}/index.html`)
    const extensionh1 = page.getByTestId('extension_h1')
    await expect(extensionh1).toHaveText('Extension h1')
    const extensionDate = page.getByTestId('extension_date')
    await expect(extensionDate).toBeVisible()
    await expect(extensionDate).toHaveText(new Date().toDateString())
    await page.waitForTimeout(3_000) //TODO: remove
  })

  test('test div inserted into page', async ({ page }) => {
    await page.goto('https://example.com')
    const testDiv = page.getByTestId('testDiv')
    await expect(testDiv).toHaveText('testDivText')
    await page.waitForTimeout(3_000) //TODO: remove
  })
})
