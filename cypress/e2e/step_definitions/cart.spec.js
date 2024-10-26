/// <reference types="Cypress" />

import cartPage from "../pages/cartPage";

// Background steps
Given('I am logged in as a standard user', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
});

// Cart steps
When('I add a product to cart', () => {
    cartPage.addToCart('backpack');
});

When('I click on cart icon', () => {
    cartPage.goToCart();
});

When('I add multiple products to cart', () => {
    cartPage.addToCart('backpack');
    cartPage.addToCart('bikeLight');
});

Given('I have a product in cart', () => {
    cartPage.addToCart('backpack');
});

When('I remove product from cart', () => {
    cartPage.goToCart();
    cartPage.removeFromCart('backpack');
});

Then('I should see the product in cart', () => {
    cartPage.validateSingleItemInCart();
});

Then('I should see all products in cart', () => {
    cartPage.validateMultipleItemsInCart();
});

Then('the cart should be empty', () => {
    cartPage.validateCartIsEmpty();
});