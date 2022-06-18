import { And, Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import registerPage from '../../pages/registerPage';


Given('I open url', () => {
    registerPage.openUrl();

});

Given('I click on Register', () => {
    registerPage.clickOnRegisterButton();
});
Given('I enter firstName', () => {
    registerPage.enterFirstName();
});

Given('I enter lastName', () => {
    registerPage.enterLastName();
});
Given('I enter emailId', () => {
    registerPage.enterEmailId();
});
Given('I enter Telephone', () => {
    registerPage.enterPhoneNumber();
});
Given('I enter password', () => {
    registerPage.enterPassword();
});
Given('I enter confirm password', () => {
    registerPage.enterConfirmPassword();
});

And('I select the Priacy Policy', () => {
    registerPage.selectPrivacyPolicy();
});
And('I click on continue', () => {
    registerPage.clickContinue();
});
Then('I should be able to see the success message',()=>
{
    registerPage.verifySuccessMessage(); 
});
Given('I enter LoginemailId',()=>{registerPage.enterLogin()}) 


Then('I logout',()=>{registerPage.LogOut();});