/// <reference types="Cypress" />

class InventoryPage {
    elements = {
        cartBadge: '.shopping_cart_badge',
        cartLink: '.shopping_cart_link',
        title: '.title',
        products: {
            backpack: {
                image: '#item_4_img_link',
                title: '#item_4_title_link',
                addBtn: '[data-test="add-to-cart-sauce-labs-backpack"]',
                removeBtn: '[data-test="remove-sauce-labs-backpack"]'
            }
        }
    }

    validateInventoryPage() {
        cy.url().should('include', '/inventory.html');
        cy.get(this.elements.title).should('contain', 'Products');
    }

    goToProduct(product) {
        cy.get(this.elements.products[product].title).click();
    }

    goToProductByImage(product) {
        cy.get(this.elements.products[product].image).click();
    }

    addToCart(product) {
        cy.get(this.elements.products[product].addBtn).click();
    }

    removeFromCart(product) {
        cy.get(this.elements.products[product].removeBtn).click();
    }

    checkCart(quantity) {
        if (quantity > 0) {
            cy.get(this.elements.cartBadge).should('have.text', quantity.toString());
        } else {
            cy.get(this.elements.cartBadge).should('not.exist');
        }
    }

    goToCart() {
        cy.get(this.elements.cartLink).click();
    }
}

export default new InventoryPage();