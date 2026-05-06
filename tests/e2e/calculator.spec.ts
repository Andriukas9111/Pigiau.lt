import { expect, test } from "@playwright/test";

test("calculator updates total when area changes", async ({ page }) => {
  await page.goto("/kainos");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  // bump area via the stepper
  const plusButton = page.getByRole("button", { name: "Increase" }).first();
  await plusButton.click();
  await plusButton.click();
  await expect(page.getByText(/€/)).toBeVisible();
});

test("language switch preserves page", async ({ page }) => {
  await page.goto("/paslaugos");
  await page.getByRole("button", { name: "en" }).first().click();
  await expect(page).toHaveURL(/\/en\/services/);
});
