const data = require('../fixtures/testData.json')

class registerPage {


    webLocators = {
        myAccount: () => cy.get('a[title="My Account"]'),
        register: () => cy.get('a:contains("Register")'),
        firstName: () => cy.get('input#input-firstname'),
        lastName: () => cy.get('input#input-lastname'),
        email: () => cy.get('input#input-email'),
        telephone: () => cy.get('input#input-telephone'),
        password: () => cy.get('input#input-password'),
        confirmPassword: () => cy.get('input#input-confirm'),
        agreePolicy: () => cy.get('input[name="agree"]'),
        continue: () => cy.get('input.btn.btn-primary'),
        successMessage:()=>cy.get('h1:contains("Your Account Has Been Created!")')


    }


    openUrl() {
        cy.visit('/');
    }

    clickOnRegisterButton() {


        this.webLocators.myAccount().click();
        this.webLocators.register().click();
    }

    enterFirstName() {
        this.webLocators.firstName().type(data.firstName);
    }

    enterLastName() {
        this.webLocators.lastName().type(data.lastName);

    }

    enterEmailId() {
        this.webLocators.email().type(data.email+
            Date.now()+"@disposable.com");

    }


    enterPhoneNumber() {
        this.webLocators.telephone().type(data.telephone);
    }


    enterPassword() {
        this.webLocators.password().type(data.password);
        this.webLocators.confirmPassword().type(data.password);

    }


    selectPrivacyPolicy() {
        this.webLocators.agreePolicy().check();

    }
    clickContinue() {
        this.webLocators.continue().click();

    }
    verifySuccessMessage()
    {
        this.webLocators.successMessage().should('exist');
        
        
    }



}
module.exports = new registerPage();