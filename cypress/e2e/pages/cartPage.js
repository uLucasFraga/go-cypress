/// <reference types="Cypress" />

class CartPage {
    elements = {
        cart: '.shopping_cart_link',
        cartItem: '.cart_item',
        cartBadge: '.shopping_cart_badge',
        products: {
            backpack: {
                add: '[data-test="add-to-cart-sauce-labs-backpack"]',
                remove: '[data-test="remove-sauce-labs-backpack"]'
            },
            bikeLight: {
                add: '[data-test="add-to-cart-sauce-labs-bike-light"]',
                remove: '[data-test="remove-sauce-labs-bike-light"]'
            }
        }
    }

    addToCart(product) {
        cy.get(this.elements.products[product].add).click();
        return this;
    }

    removeFromCart(product) {
        cy.get(this.elements.products[product].remove).click();
        return this;
    }

    goToCart() {
        cy.get(this.elements.cart).click();
        return this;
    }

    validateSingleItemInCart() {
        cy.get(this.elements.cartItem).should('have.length', 1);
        return this;
    }

    validateMultipleItemsInCart() {
        cy.get(this.elements.cartItem).should('have.length', 2);
        return this;
    }

    validateCartIsEmpty() {
        cy.get(this.elements.cartItem).should('not.exist');
        cy.get(this.elements.cartBadge).should('not.exist');
        return this;
    }
}

export default new CartPage();