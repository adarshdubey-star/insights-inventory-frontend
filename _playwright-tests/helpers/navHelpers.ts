import { type Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

export const navigateToInventoryFunc = async (page: Page) => {
  //title
  await page.goto('/insights/inventory/', { timeout: 100000 });
  await expect(page.getByRole('heading', { name: 'Systems' })).toBeVisible({ timeout: 100000 });
};
