/// <reference types="Cypress" />

class LoginPage {
    elements = {
        username: '#user-name',
        password: '#password',
        loginBtn: '#login-button',
        error: 'h3[data-test="error"]'
    }

    login(username, password) {
        cy.get(this.elements.username).clear();
        cy.get(this.elements.password).clear();

        if (username) cy.get(this.elements.username).type(username);
        if (password) cy.get(this.elements.password).type(password, { log: false });
        cy.get(this.elements.loginBtn).click();
        return this;
    }

    checkError(message) {
        cy.get(this.elements.error).should('contain', message);
        return this;
    }
}

module.exports = new LoginPage();