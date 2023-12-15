import { Enums } from "../support/common/enums";
import { Actions } from "../support/pages/commonactions";
import { HomePage } from "../support/pages/homepage";
import { LoginPage } from "../support/pages/loginpage";
import { SalesPage } from "../support/pages/salespage";

describe("daft search functionality", () => {
  const filterName = "garage";

  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    LoginPage.enterCredentialsAndLogin();
  });

  after(() => {
    HomePage.logout();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

  it("Verify Homepage", () => {
    LoginPage.verifyHomePage();
  });

  it("Test Case 1: Search for a Sale Ad in county Dublin and verify result", () => {
    HomePage.navigateToSaleSection();
    Actions.filterCountriesInSelect(Enums.Cities.COUNTY);
    SalesPage.verifySearchResult();
  });

  it("Test Case 2: Apply Garage filter and verify result", () => {
    SalesPage.applyGarageFilter(filterName);
  });

  it("Test Case 3: Verify filter applied correctly", () => {
    SalesPage.verifyGarageFilterApplied(filterName);
  });
});
