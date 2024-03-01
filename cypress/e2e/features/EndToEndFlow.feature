@regressionE2E
Feature: End to end testing on naveenautomationlabs
        Background:
                Given I open url
                Given I select to Login
                Given I enter LoginemailId
                Given I enter password
                And I click on LoginButton
               



        Scenario Outline: AddToCart,Checkout
                Given I clear the cart
                Given I clear the search
                And I search for "<Product>"
                And I click on search button
                And I click on AddToCart
                Then I should see success message for the "<Product>" added to the cart
                Given I click on shopping cart
                Then I see "<Product>" in the cart is present
                Given I click on checkout
                Given I enter Billing Address
                And I confirm Order
                Then order should be placed
                Examples:
                        | Product |
                        | iMac    |
                        | iPhone  |



