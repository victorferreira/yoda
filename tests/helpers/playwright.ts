import { test as base, type Page } from "@playwright/test";

type TestFixtures = {
  login: () => Promise<{ page: Page }>;
};

export const test = base.extend<TestFixtures>({
  login: async ({ browser }, use) => {
    // login helper
    await use(async () => {
      const context = await browser.newContext({
        httpCredentials: {
          username: "admin",
          password: "admin",
        },
      });
      const page = await context.newPage();
      return { page };
    });
  },
});

export const { expect } = test;
