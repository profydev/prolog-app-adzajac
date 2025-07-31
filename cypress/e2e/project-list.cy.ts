import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusLabels = ["Critical", "Warning", "Stable"];
      const badgeColors = [
        {
          background: "rgb(254, 243, 242)",
          text: "rgb(180, 35, 24)",
        },
        {
          background: "rgb(255, 250, 235)",
          text: "rgb(181, 71, 8)",
        },
        {
          background: "rgb(236, 253, 243)",
          text: "rgb(2, 122, 72)",
        },
      ];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el)
            .contains(statusLabels[index])
            .should(
              "have.css",
              "background-color",
              badgeColors[index].background,
            )
            .should("have.css", "color", badgeColors[index].text);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
