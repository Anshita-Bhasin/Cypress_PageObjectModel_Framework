@E2ENaveenAutomationLabs
Feature: End to end testing on naveenautomationlabs

       Scenario: Fill all the mandatory information and register on the website
              Given I open url
              Given I click on Register
              Given I enter firstName
              Given I enter lastName
              Given I enter emailId
              Given I enter Telephone
              Given I enter password and confirm password
              And I select the Priacy Policy
              And I click on continue
              Then I should be able to see the success message


       Scenario: Login into the webapp
              Given I select to Login
              Given I enter emailaddress
              Given I enter password
              And I click on LoginButton


       Scenario Outline: Search And Add to Cart Sceanrio
              Given I clear the search
              And I search for "<Product>"
              And I click on search button
              And I click on AddToCart
              Then I should see success message for the "<Product>" added to the cart
              Given I click on shopping cart
              Then I see "<Product>" in the cart is present
              Examples:
                     | Product |
                     | MacBook |
                     | iPhone  |