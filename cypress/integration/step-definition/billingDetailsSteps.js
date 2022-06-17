import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import CheckOutPage from '../../pages/billingDetailsPage';


Given('I click on checkout',()=>{
    CheckOutPage.clickOnCheckout();
});


Given('I enter Address1',()=>{CheckOutPage.enterAddress1();});
Given('I enter City',()=>{CheckOutPage.enterCity();});
Given('I select Country',()=>{CheckOutPage.enterCountry();});
Given('I select Region',()=>{CheckOutPage.enterRegion();});
Given('I click on Continue',()=>{CheckOutPage.clickContinue();
    CheckOutPage.clickContinue();
});