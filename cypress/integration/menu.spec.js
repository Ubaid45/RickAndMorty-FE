context("Inventory Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080");
    });

    it("is the main page", () => {
        cy.get("#title").contains("Rick and Morty");
    });

    it("has search box ", () => {
        cy.get('input[name="rickandmorty"]');
        cy.get(".sbx-google__submit");
    });

    it("search and select character and it appears in the list below", () => {

        cy.get('input[name="rickandmorty"]').type("Abradolf Lincler", {
            delay: 60,
        });
        cy.get('.card-container').contains("Abradolf Lincler");
        cy.get('input[name="rickandmorty"]').clear();


        cy.get('input[name="rickandmorty"]').type("Morty Smith", {
            delay: 60,
        });
        cy.get('.card-container').contains("Morty Smith");
        cy.get('input[name="rickandmorty"]').clear();

        cy.get('input[name="rickandmorty"]').type("Albert Einstein", {
            delay: 60,
        });
        cy.get('.card-container').contains("Albert Einstein");
        cy.get('input[name="rickandmorty"]').clear();


        cy.get('input[name="rickandmorty"]').type("Alien Rick", {
            delay: 60,
        });
        cy.get('.card-container').contains("Alien Rick");
    });




});