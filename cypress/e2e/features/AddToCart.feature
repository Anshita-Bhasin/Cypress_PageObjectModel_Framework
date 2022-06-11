Feature: Open website

    Scenario: I want to open website and verify the title
        Given I open url
        And I search for "MacBook"
        And I click on search button
        And I click on AddToCart
        Then I should see success message for the product added to the cart


# Given I click on cart