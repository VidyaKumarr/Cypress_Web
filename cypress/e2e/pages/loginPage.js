export class loginPage {
    weblocators = {
        "input": "test"
    }

    login() {

        cy.visit('')
        cy.printTitle()
        cy.get('#login').click()
        cy.get(this.weblocators.input).click()

    }



}

