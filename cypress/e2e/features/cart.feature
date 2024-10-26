Feature: Shopping Cart Management
  As a user
  I want to manage products in my shopping cart
  So that I can prepare for checkout

  Background: 
    Given I am logged in as a standard user
    
  @view-cart
  Scenario: View product in cart
    When I add a product to cart
    And I click on cart icon
    Then I should see the product in cart

  @remove-cart
  Scenario: Remove product from cart
    Given I have a product in cart
    When I remove product from cart
    Then the cart should be empty

  @multiple-cart
  Scenario: Add multiple products to cart
    When I add multiple products to cart
    And I click on cart icon
    Then I should see all products in cart