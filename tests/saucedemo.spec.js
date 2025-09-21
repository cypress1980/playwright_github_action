const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');
const InventoryPage = require('./pages/InventoryPage');
const CartPage = require('./pages/CartPage');
const CheckoutPage = require('./pages/CheckoutPage');

test('Complete checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add product to cart
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    // Proceed to checkout
    await cartPage.proceedToCheckout();

    // Fill checkout information with random data
    const firstName = `Test${Math.floor(Math.random() * 1000)}`;
    const lastName = `User${Math.floor(Math.random() * 1000)}`;
    const zipCode = `${Math.floor(Math.random() * 90000) + 10000}`;
    
    await checkoutPage.fillCheckoutInfo(firstName, lastName, zipCode);
    await checkoutPage.finishOrder();

    // Verify confirmation message
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toBe('Thank you for your order!');
});