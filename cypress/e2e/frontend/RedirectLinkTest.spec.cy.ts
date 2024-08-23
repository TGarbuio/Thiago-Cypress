import * as urls from 'cypress/fixtures/urls.json';
import { RedirectLinkPageEnum } from 'cypress/support/enums/RedirectLinkPage.enum';

describe('Test Redirector Link', () => {
    const redirectUrl = urls.redirect;

    it('should redirect to status codes page', () => {
      // Acessa a página inicial
      cy.visit('https://the-internet.herokuapp.com/redirector');
      
      // Clica no link de redirecionamento
      //cy.get('a[href="/redirect"]').click();
      cy.get('#redirect').click();
      
      // Valida que foi redirecionado para a página esperada
      cy.url().should('include', '/status_codes');
      
      // Faz log do sucesso do redirecionamento
      cy.log('Redirecionamento para /status_codes bem-sucedido');
    });
  });