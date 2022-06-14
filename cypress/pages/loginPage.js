const data = require('../fixtures/testData.json')
import RegisterPage from '../pages/registerPage';

class loginPage {


    webLocators = {
        
        continueTologin: () => cy.get('a:contains("Continue")'),
        email: () => cy.get('input[name="email"]'),
        password: () => cy.get('input[name="password"]'),
        loginSubmit: () => cy.get('input[value="Login"]'),
        lastName: () => cy.get('input#input-lastname'),
        email: () => cy.get('input#input-email'),
        telephone: () => cy.get('input#input-telephone'),
        password: () => cy.get('input#input-password'),
        confirmPassword: () => cy.get('input#input-confirm'),
        agreePolicy: () => cy.get('input[name="agree"]'),
        continue: () => cy.get('input.btn.btn-primary'),
        successMessage: () => cy.get('h1:contains("Your Account Has Been Created!")')


    }



    selectLogin() {
        this.webLocators.continueTologin().click();

    }

    enterEmailAddress() {
        const email = RegisterPage.generateEmailId();
       // cy.log("*******" + generateEmailId);
        this.webLocators.email().type(RegisterPage.generateEmailId());

    }
    enterPassword() {
        this.webLocators.password().type(data.password);

    }
    clickLogin() {
        this.webLocators.loginSubmit().click();
    }

}
module.exports = new loginPage();