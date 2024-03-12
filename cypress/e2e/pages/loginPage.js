export class loginPage {
    weblocators = {
        "input": "test"
    }

    login() {

        cy.visit('')
        cy.printTitle()
        cy.get('#login').click()


        //cy.readFile("C:\Users\vidya\OneDrive\Desktop\Web\Cypress_Web\cypress\screenshots/login.feature/I want to login into the site -- Login Test Case (failed).png")
        //C:\Users\vidya\OneDrive\Desktop\Web\Cypress_Web\cypress\screenshots\login.feature\I want to login into the site -- Login Test Case (failed).png
    }




    tablehandle() {
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('table[name="BookTable"] > tbody > tr').contains('td', 'Selenium').should('be.visible');
        cy.get('table[name="BookTable"] > tbody > tr > td').first().then($value => {
            const textValue = $value.text();
            cy.wrap(textValue).as('wrapValue');
        });
    }

    validateTableText() {
        cy.get('@wrapValue').then((wrapValue) => {
            cy.log('** print text **' + wrapValue);
        });
    }


    readAllRowsAndCols() {
        cy.get('table[name="BookTable"]').find('tbody > tr').each(($row, index, $rows) => {

            if (index > 0) {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, index, $cols) => {
                        cy.log($col.text());
                    });
                });
            }
        });
    }


}

