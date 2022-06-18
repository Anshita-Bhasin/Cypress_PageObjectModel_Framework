import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import billingDetailsPage from '../../pages/billingDetailsPage';


Given('I click on checkout',()=>{
    billingDetailsPage.clickOnCheckout();
});


Given('I enter Billing Address',()=>{
    billingDetailsPage .enterBillingAddress(); 
});

And('I confirm Order',()=>{
    billingDetailsPage.confirmOrder();
});

Then('order should be placed',()=>{
    billingDetailsPage.verifyPlacedOrder();
});