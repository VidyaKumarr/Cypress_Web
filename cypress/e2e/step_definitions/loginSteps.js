import {
    Given,
    When,
    Then,
    And,
  } from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from "../pages/loginPage"
 
const loginPageObj = new loginPage()

Given('I navigate to the website',()=>{
    loginPageObj.login()
})
