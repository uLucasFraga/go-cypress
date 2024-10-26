/// <reference types="Cypress" />

import checkoutPage from "../pages/checkoutPage";
import inventoryPage from "../pages/inventoryPage";

Given('I am logged in as a standard user', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
});

Given('I have items in my cart', () => {
    inventoryPage.addToCart('backpack');
    inventoryPage.goToCart();
    cy.get('[data-test="checkout"]').click();
});

When('I fill checkout information', () => {
    checkoutPage.fillForm('John', 'Doe', '12345');
    checkoutPage.continue();
    checkoutPage.finish();
});

When('I fill checkout without zipcode', () => {
    checkoutPage.fillForm('John', 'Doe', '');
    checkoutPage.continue();
});

When('I fill checkout with empty fields', () => {
    checkoutPage.fillForm('', '', '');
    checkoutPage.continue();
});

When('I click cancel on checkout', () => {
    checkoutPage.cancel();
});

Then('I should see {string}', (message) => {
    checkoutPage.checkError(message);
});

Then('I should see the order confirmation', () => {
    checkoutPage.checkComplete();
});

Then('I should return to the cart page', () => {
    cy.url().should('include', '/cart.html');
});