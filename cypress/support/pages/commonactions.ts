import { Enums } from "../common/enums";

export class Actions {
  static filterCountriesInSelect(country: Enums.Cities) {
    cy.get('[data-testid="county-area-filter"]').clear().type(country);
  }
}
