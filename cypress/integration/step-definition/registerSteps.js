import { And, Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import RegisterPage from '../../pages/registerPage';


Given('I open url', () => {
    RegisterPage.openUrl();

});

Given('I click on Register', () => {
    RegisterPage.clickOnRegisterButton();
});
Given('I enter firstName', () => {
    RegisterPage.enterFirstName();
});

Given('I enter lastName', () => {
    RegisterPage.enterLastName();
});
Given('I enter emailId', () => {
    RegisterPage.enterEmailId();
});
Given('I enter Telephone', () => {
    RegisterPage.enterPhoneNumber();
});
Given('I enter password and confirm password', () => {
    RegisterPage.enterPassword();
});
And('I select the Priacy Policy', () => {
    RegisterPage.selectPrivacyPolicy();
});
And('I click on continue', () => {
    RegisterPage.clickContinue();
});
Then('I should be able to see the success message',()=>
{
    RegisterPage.verifySuccessMessage(); 
});


