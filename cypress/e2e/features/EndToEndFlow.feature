@E2ENaveenAutomationLabs
Feature: End to end testing on naveenautomationlabs
       Background: Login 
              Given I open url
              Given I select to Login
              Given I enter emailaddress
              Given I enter password
              And I click on LoginButton
              Then I should be logged In successfully



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


       Scenario: Enter Billing Details
              Given I click on checkout
              Given I enter firstName
              Given I enter lastName
              Given I enter Address1
              Given I enter City
              Given I select Country
              Given I select Region
              Given I click on Continue