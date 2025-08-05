describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
    cy.wait(500);
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the footer", () => {
      cy.get("footer").contains("Version");

      cy.get("footer")
        .contains("Docs")
        .should("have.attr", "href", "#")
        .click();

      cy.get("footer").contains("API").should("have.attr", "href", "#").click();

      cy.get("footer")
        .contains("Help")
        .should("have.attr", "href", "#")
        .click();

      cy.get("footer")
        .contains("Community")
        .should("have.attr", "href", "#")
        .click();

      cy.get("footer")
        .find("img")
        .should("have.attr", "src")
        .should("include", "logo-small.svg");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("renders the footer", () => {
      cy.get("footer").contains("Version");

      cy.get("footer")
        .contains("Docs")
        .should("have.attr", "href", "#")
        .click();

      cy.get("footer").contains("API").should("have.attr", "href", "#").click();

      cy.get("footer")
        .contains("Help")
        .should("have.attr", "href", "#")
        .click();

      cy.get("footer")
        .contains("Community")
        .should("have.attr", "href", "#")
        .click();

      cy.get("footer")
        .find("img")
        .should("have.attr", "src")
        .should("include", "logo-small.svg");
    });
  });
});
