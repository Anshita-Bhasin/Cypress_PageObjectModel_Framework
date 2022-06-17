
const data = require('../fixtures/testData.json')

class checkOutPage {

   
    webLocators = {
        checkout: () => cy.get('a[title="Checkout"]'),
        address1: () => cy.get('input#input-payment-address-1'),
        city: () => cy.get('input#input-payment-city'),
        country:()=>cy.get('select#input-payment-country').select('United Arab Emirates') ,
        region:()=>cy.get('select#input-payment-zone').select('Dubai'),
        continue:()=>cy.get('type="button"')



       
    }


    clickOnCheckout()
    {
        this.webLocators.checkout().click();
    }
   


    enterAddress1()
    {
        this.webLocators.address1().type(data.BillingAddress.address1);
    }


    enterCity(){
        this.webLocators.city().type(data.BillingAddress.city);

    }

    
    enterCountry(){
        this.webLocators.country();

    }
    enterRegion(){
        this.webLocators.region();

    }
    clickContinue(){
        this.webLocators.continue().click();

    }

}

module.exports = new checkOutPage();