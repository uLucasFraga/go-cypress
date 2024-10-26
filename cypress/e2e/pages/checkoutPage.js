/// <reference types="Cypress" />

class CheckoutPage {
    elements = {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        zipCode: '[data-test="postalCode"]',
        continueBtn: '[data-test="continue"]',
        cancelBtn: '[data-test="cancel"]',
        finishBtn: '[data-test="finish"]',
        payment: '.summary_value_label',
        complete: '.complete-header',
        error: '[data-test="error"]'
    }

    fillForm(firstName = '', lastName = '', zipCode = '') {
        if(firstName) cy.get(this.elements.firstName).type(firstName);
        if(lastName) cy.get(this.elements.lastName).type(lastName);
        if(zipCode) cy.get(this.elements.zipCode).type(zipCode);
        return this;
    }

    continue() {
        cy.get(this.elements.continueBtn).click();
        return this;
    }

    cancel() {
        cy.get(this.elements.cancelBtn).click();
        return this;
    }

    finish() {
        cy.get(this.elements.finishBtn).click();
        return this;
    }

    checkPayment(expectedText) {
        cy.get(this.elements.payment).should('contain', expectedText);
        return this;
    }

    checkComplete(message = 'Thank you for your order!') {
        cy.get(this.elements.complete).should('contain', message);
        return this;
    }

    checkError(message) {
        cy.get(this.elements.error).should('contain', message);
        return this;
    }
}

export default new CheckoutPage();