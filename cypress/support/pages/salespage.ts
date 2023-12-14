import { SHORT_TIME } from "../timeouts";

export class SalesPage {
  static verifySaleSearchResult() {
    cy.get('[data-testid="search-h1"]', SHORT_TIME)
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Properties for Sale in Ireland").should("exist");
    cy.get('[data-cyid="search-h1"]')
      .invoke("text")
      .then((text) => {
        const propertyCount = parseInt(text);
        expect(propertyCount).to.be.greaterThan(0);
      });
  }

  static applyGarageFilter(filterName: string) {
    cy.get('[data-testid="open-filters-modal"]')
      .should("be.visible")
      .click({ force: true });
    cy.get('[data-testid="terms-input-text"]')
      .scrollIntoView()
      .should("be.visible")
      .type(filterName);
    cy.get('[data-testid="filters-modal-show-results-button"]').click();
  }

  static verifyGarageFilterResult() {
    cy.get('[data-testid="search-h1"]').should("exist");
    cy.contains("Properties for Sale in Ireland").should("exist");
    cy.get('[data-cyid="search-h1"]')
      .invoke("text")
      .then((text) => {
        const propertyCount = parseInt(text);
        expect(propertyCount).to.be.greaterThan(0);
      });
  }

  static verifyGarageFilterApplied(filterName: string) {
    cy.get('[data-testid="overview-info-sticker"]')
      .eq(0)
      .should("be.visible")
      .click();
    cy.get('[data-testid="description"]').should("contain", filterName);
  }
}
