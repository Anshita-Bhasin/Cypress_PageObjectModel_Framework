import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/loginPage';

Given('I select to Login', () => {
    LoginPage.selectLogin();
});

Given('I enter emailaddress', () => {
    LoginPage.enterEmailAddress();
});

Given('I enter password', () => {
    LoginPage.enterPassword();
});

And('I click on LoginButton', () => {
    LoginPage.clickLogin();
});