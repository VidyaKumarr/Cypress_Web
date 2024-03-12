export class loginPage {
    weblocators = {
        "input": "test"
    }

    login() {

        cy.visit('')
        cy.printTitle()

        //cy.readFile("/Users/anshita/Desktop/anshita/Cypress_Web/cypress/screenshots/login.feature/I want to login into the site -- Login Test Case (failed).png") 



        //cy.log("**folder name**", Cypress.config("screenshotsFolder")+/`${Cypress.spec.name}`+/`${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`)


        cy.get('#login').click()


        //cy.readFile("C:\Users\vidya\OneDrive\Desktop\Web\Cypress_Web\cypress\screenshots/login.feature/I want to login into the site -- Login Test Case (failed).png")
        //C:\Users\vidya\OneDrive\Desktop\Web\Cypress_Web\cypress\screenshots\login.feature\I want to login into the site -- Login Test Case (failed).png
    }
}