
const data = require('../fixtures/testData.json')

class addToCartPage {


    webLocators = {
        search: () => cy.get('input[type="text"]'),
        addToCartButton: () => cy.get('div.button-group>button').first(),
        successMessage: () => cy.get('div.alert.alert-success.alert-dismissible'),
        searchProduct: () => cy.get('button.btn.btn-default.btn-lg')
    }


    openUrl() {
        cy.visit('/');
    }

    searchText(product) {

        this.webLocators.search().type(product);
    }

    clickOnSearch() {
        this.webLocators.searchProduct().click();
    }

    addToCart() {
        this.webLocators.addToCartButton().click();
    }

    verifySucessMessage() {
        this.webLocators.successMessage().contains(data.successMessage);
    }
}

module.exports = new addToCartPage();