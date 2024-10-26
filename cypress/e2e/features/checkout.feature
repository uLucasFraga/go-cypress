Feature: Checkout Process
  As a user
  I want to complete my purchase
  So that I can receive my products

  Background: 
    Given I am logged in as a standard user
    And I have items in my cart

  @valid-checkout
  Scenario: Complete purchase successfully
    When I fill checkout information
    Then I should see the order confirmation

  @invalid-checkout
  Scenario: Failed checkout with invalid zip code
    When I fill checkout without zipcode
    Then I should see "Error: Postal Code is required"

  @empty-fields
  Scenario: Failed checkout with empty fields
    When I fill checkout with empty fields
    Then I should see "Error: First Name is required"

  @cancel-checkout
  Scenario: Cancel checkout process
    When I click cancel on checkout
    Then I should return to the cart page