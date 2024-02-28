import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {loginPage} from "../pages/loginPage"
 
const loginPageObj = new loginPage()

Given('I navigate to the website',()=>{
    loginPageObj.login()
    cy.printURL()
    
})
