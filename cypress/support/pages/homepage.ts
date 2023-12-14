import { MEDIUM_TIME } from "../timeouts";

export class HomePage {
  static navigateToSaleSection() {
    cy.get('[data-testid="quick-link-0"]', MEDIUM_TIME)
      .should("exist")
      .contains("For Sale")
      .click({ force: true });
  }

  static logout() {
    cy.get('[data-testid="top-level-nav-item"]')
      .eq(8)
      .contains("MyDaft")
      .should("be.visible")
      .click();
    cy.get('[href="/auth/logout"]').click();
    cy.get('input[id="kc-logout"]').should('be.visible').click();
  }
}
