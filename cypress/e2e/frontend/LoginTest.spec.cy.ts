import * as urls from 'cypress/fixtures/urls.json';

describe('Login test', () => {
    const loginUrl = urls.login;
    
    it('should login to the page', () => {
        cy.log('Opening the login page');
        cy.visit(loginUrl);

        cy.log('Typing the username');
        cy.get('#username').type('tomsmith');
        cy.log('Typing the password');
        cy.get('#password').type('SuperSecretPassword!');
        cy.log('Clicking the login button');
        cy.get('.radius').click();
        cy.wait(2000);
        cy.log('Asserting that the login is successful');
        cy.get('#flash').should('contain', 'You logged into a secure area!');
        cy.log('Asserting that the URL is correct');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');

        cy.log('Logging out');
        cy.get('.button').click();
        cy.log('Asserting that the logout is successful');
        cy.get('#flash').should('contain', 'You logged out of the secure area!');

    });
});