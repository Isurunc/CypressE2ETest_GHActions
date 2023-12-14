import { MENU_RENDERING_TIME } from "../timeouts";


export class LoginPage {

    static navigate() {  
     cy.visit('https://www.daft.ie/');
    }
  
    
    static enterCredentialsAndLogin() {
        cy.visit(Cypress.env("baseUrl"));
        cy.get('[data-testid="top-level-active-nav-link"]').should('be.visible').click();
        cy.get('input[name="username"]').clear().type(Cypress.env("Username"));
        cy.get('input[name="password"]').clear().type(Cypress.env("Password"));
        cy.get('input[id="login"]').should('be.visible').click();
        cy.wait(MENU_RENDERING_TIME);
        cy.log("User logged in successfully");
    }
  
    static verifyHomePage() {
        cy.get('[data-testid="homepage-tagline"]').should('exist')
        .contains('Find your way home');
    }
   
}

