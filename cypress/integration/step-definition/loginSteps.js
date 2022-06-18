import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../pages/loginPage';

Given('I select to Login', () => {
    loginPage.selectLogin();
});

And('I click on LoginButton', () => {
    loginPage.clickLogin();
});

Then('I should be logged In successfully',()=>
{
    loginPage.verifyLogin();
}) 
