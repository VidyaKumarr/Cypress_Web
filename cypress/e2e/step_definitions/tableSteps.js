import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { tablePage } from "../pages/tablePage";
 

const tablePageObj = new tablePage()

Given('I navigate to the practice website',()=>{
    tablePageObj.tablehandle()
    tablePageObj.validateTableText()
    tablePageObj.Readrows()
    cy.printURL()
    
})
