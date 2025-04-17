import { test, expect } from "./helpers/playwright";

test("should return 401 for unauthorized users", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("401 Authorization Required");
});

test("should allow access with basic auth", async ({ login }) => {
  const { page } = await login();

  await page.goto("/");
  await expect(page.getByRole("paragraph")).toHaveText("nothing to see here.");
});
