# File: cypress/e2e/features/login.feature

Feature: User Authentication
  As a user
  I want to authenticate in the system
  So that I can access the protected features

  Background: 
    Given I am on the login page

  @valid-login
  Scenario: Successful login with valid credentials
    When I login with valid credentials
    Then I should be redirected to the inventory page

  @invalid-login
  Scenario: Failed login with invalid password
    When I login with invalid credentials
    Then I should see "Username and password do not match any user in this service"

  @locker-login
  Scenario: Failed login with locker user
    When I login with locked user
    Then I should see "Sorry, this user has been locked out"

  @empty-fields
  Scenario: Login attempt with empty fields
    When I login with empty fields
    Then I should see "Username is required"

  @empty-username
  Scenario: Login attempt without username
    When I login without username fields
    Then I should see "Username is required"

  @empty-password
  Scenario: Login attempt without password
    When I login without password fields
    Then I should see "Password is required"