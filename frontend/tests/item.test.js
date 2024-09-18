const { test, expect } = require("@playwright/test");

test("should load the page and check form elements", async ({ page }) => {
  // Navigate to your application
  await page.goto("http://localhost:3000"); // Adjust this URL if necessary

  // Wait for the page to load completely
  await page.waitForLoadState("load");

  // Ensure that form elements are visible
  await expect(page.locator('input[placeholder="Item Name"]')).toBeVisible();
  await expect(
    page.locator('input[placeholder="Item Description"]')
  ).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});

test("should create and list items", async ({ page }) => {
  // Assuming you have code to create an item here

  // Log to confirm the page is in the expected state
  console.log("Waiting for the list to update");

  // Increase the timeout and add debugging information
  try {
    // Wait for the ul element to be visible
    await page.waitForSelector("ul", { timeout: 60000 }); // 60 seconds

    // Log to confirm the element is found
    console.log("List updated, fetching items");

    // Fetch items and log them
    const items = await page.locator("ul").allTextContents();
    console.log("Items found:", items);

    // Check if "New Item" is in the list
    expect(items).toContain("New Item");
  } catch (error) {
    // Log additional debugging information if there's an error
    console.error(
      "An error occurred while waiting for the list to update:",
      error
    );

    // Take a screenshot for debugging purposes
    await page.screenshot({ path: "screenshot.png" });
    console.log("Screenshot taken: screenshot.png");

    // Re-throw the error to ensure the test fails
    throw error;
  }
});
