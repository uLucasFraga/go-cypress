/// <reference types="Cypress" />

import inventoryPage from "../pages/inventoryPage";
import loginPage, { login } from "../pages/loginPage";

const standardUser = Cypress.env('USER_STANDARD') || 'standard_user_fallback';
const userPassword = Cypress.env('USER_PASSWORD') || 'password_fallback';

Given('I am on the login page', () => {
    cy.visit('/');
});

When('I login with valid credentials', () => {
    loginPage.login(
        standardUser,
        userPassword
    );
});

When('I login with invalid credentials', () => {
    loginPage.login(
        Cypress.env('INVALID_USER'),
        Cypress.env('INALID_PASSWORD')
    );
});

When('I login with locked user', () => {
    loginPage.login(
        Cypress.env('USER_LOCKED'),
        userPassword
    );
});

When('I login with empty fields', () => {
    loginPage.login();
});

When('I login without username fields', () => {
    loginPage.login('', userPassword);
});

When('I login without password fields', () => {
    loginPage.login(standardUser, '');
});

Then('I should see {string}', (message) => {
    loginPage.checkError(message);
});
