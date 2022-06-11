import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import OpenPage from '../../pages/addToCartPage';


Given('I open url', () => {
    OpenPage.openUrl();


})


å
And('I search for {string}', (product) => {

    OpenPage.searchText(product);

});

And('I click on search button', () => { OpenPage.clickOnSearch(); });


And('I click on AddToCart', () => { OpenPage.addToCart(); });

Then('I should see success message for the product added to the cart', () => { OpenPage.verifySucessMessage(); });