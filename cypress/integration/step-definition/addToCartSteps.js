import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import AddToCartPage from '../../pages/addToCartPage';


And('I search for {string}', (product) => {

    AddToCartPage.searchText(product);

});

Given('I clear the search',()=>{
    AddToCartPage.clearSearch();
});

And('I click on search button', () => { AddToCartPage.clickOnSearch(); });


And('I click on AddToCart', () => { AddToCartPage.addToCart(); });

Then('I should see success message for the {string} added to the cart', (product) => {
    AddToCartPage.verifySucessMessage(product);
     });

   