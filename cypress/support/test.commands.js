Cypress.Commands.add('printTitle' , () => {

    cy.log("Printing Title", cy.title())
})