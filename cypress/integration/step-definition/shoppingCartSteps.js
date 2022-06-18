import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import ShoppingCartPage from '../../pages/shoppingCartPage';



Given('I click on shopping cart',()=>{
    ShoppingCartPage.clickOnCart();
});



Then('I see {string} in the cart is present',(product)=>{
    ShoppingCartPage.verifyProductsInCart(product);
});
   
Given('I clear the cart',()=>{ShoppingCartPage.clearcart();});
  