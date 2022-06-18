@E2ENaveenAutomationLabsLogout
Feature: End to end testing on naveenautomationlabs

       Scenario: Login and Logout

              Given I open url
              Given I select to Login
              Given I enter LoginemailId
              Given I enter password
              And I click on LoginButton
              Then I should be logged In successfully
              Then I logout

