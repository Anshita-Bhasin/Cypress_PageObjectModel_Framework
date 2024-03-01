import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import addToCartPage from '../../pages/addToCartPage';
import data from '../../fixtures/testData.json'
//const data = require('../fixtures/testData.json')

And('I search for {string}', (product) => {

    addToCartPage.searchText(product);

});

Given('I clear the search', () => {
    addToCartPage.clearSearch();
});

And('I click on search button', () => { addToCartPage.clickOnSearch(); });


And('I click on AddToCart', () => { addToCartPage.addToCart(); });

Then('I should see success message for the {string} added to the cart', (product) => {
     addToCartPage.verifySucessMessage(product);

   });


