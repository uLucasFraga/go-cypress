# File: cypress/e2e/features/inventory.feature

Feature: Inventory Management
  As a user
  I want to manage products in the inventory
  So that I can add items to my cart

  Background: 
    Given I am logged in as a standard user

  @view-product-image
  Scenario: View product details by image
    When I click on a product image
    Then I should see the product details page

  @view-product-title
  Scenario: View product details by title
    When I click on a product title
    Then I should see the product details page

  @add-product
  Scenario: Add product to cart
    When I click add to cart button
    Then the shopping cart badge should show "1"
    And the button should change to "Remove"
  @remove-product
  Scenario: Remove product from cart
    Given I have added a product to cart
    When I click remove button
    Then the shopping cart badge should not be visible
    And the button should change to "Add to cart"