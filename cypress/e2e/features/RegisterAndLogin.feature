@regressionReg
Feature: End to end testing on naveenautomationlabs

       Scenario: Fill all the mandatory information and register on the website
              Given I open url
              Given I click on Register
              Given I enter firstName
              Given I enter lastName
              Given I enter emailId
              Given I enter Telephone
              Given I enter password
              Given I enter confirm password
              And I select the Priacy Policy
              And I click on continue
              Then I should be able to see the success message

              Scenario: Login
              Given I open url
              Given I select to Login
              Given I enter emailId
              Given I enter password
              And I click on LoginButton
              Then I should be logged In successfully

