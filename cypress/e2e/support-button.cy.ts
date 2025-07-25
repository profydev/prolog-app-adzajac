describe("Support button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard/alerts");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("is working", () => {
      cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpenStub");
      });
      cy.get("nav").contains("Support").click();

      cy.get("@windowOpenStub").should(
        "be.calledWithMatch",
        "support@prolog-app.com",
      );
      cy.get("@windowOpenStub").should(
        "be.calledWithMatch",
        "subject=Support%20Request%3A",
      );
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });
    it("is working", () => {
      cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpenStub");
      });

      // wait for animation to finish
      cy.wait(500);
      cy.get("img[alt='open menu']").click();

      // wait for animation to finish
      cy.wait(500);
      cy.get("nav").contains("Support").click();

      cy.get("@windowOpenStub").should(
        "be.calledWithMatch",
        "mailto:support@prolog-app.com?subject=Support%20Request%3A",
      );
    });
  });
});
