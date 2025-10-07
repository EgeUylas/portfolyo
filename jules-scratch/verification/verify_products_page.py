from playwright.sync_api import sync_playwright, Page, expect

def verify_products_page(page: Page):
    """
    This test verifies that the /products page loads correctly and displays the
    product list.
    """
    # 1. Arrange: Go to the products page.
    page.goto("http://localhost:3000/products")

    # 2. Assert: Confirm the page has the correct heading.
    heading = page.get_by_role("heading", name="Products")
    expect(heading).to_be_visible()

    # 3. Assert: Check for the product list.
    product_list = page.get_by_role("list")
    expect(product_list).to_be_visible()
    expect(product_list.get_by_role("listitem")).to_have_count(3)


    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/products_page_updated.png")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    verify_products_page(page)
    browser.close()