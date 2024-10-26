/// <reference types="Cypress" />

import inventoryPage from "../pages/inventoryPage";

Then('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
});

Given('I am logged in as a standard user', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
});

When('I click on a product image', () => {
    inventoryPage.goToProductByImage('backpack');
});

When('I click on a product title', () => {
    inventoryPage.goToProduct('backpack');
});

When('I click add to cart button', () => {
    inventoryPage.addToCart('backpack');
});

When('I click remove button', () => {
    inventoryPage.removeFromCart('backpack');
});

Given('I have added a product to cart', () => {
    inventoryPage.addToCart('backpack');
});

Then('I should see the product details page', () => {
    cy.url().should('include', '/inventory-item.html');
});

Then('the shopping cart badge should show {string}', (quantity) => {
    inventoryPage.checkCart(parseInt(quantity));
});

Then('the shopping cart badge should not be visible', () => {
    inventoryPage.checkCart(0);
});

Then('the button should change to {string}', (buttonText) => {
    if (buttonText === 'Remove') {
        cy.get(inventoryPage.elements.products.backpack.removeBtn).should('be.visible');
    } else {
        cy.get(inventoryPage.elements.products.backpack.addBtn).should('be.visible');
    }
});