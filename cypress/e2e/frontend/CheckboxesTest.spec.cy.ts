import * as urls from 'cypress/fixtures/urls.json'
import { CheckboxPageEnum } from 'cypress/support/enums/checkboxPage.enum';

describe('Check all checkboxes of the page', () => {
    const checkBoxUrl = urls.checkboxes;
    
    it('should check and uncheck all checkboxes of the page', () => {
        cy.log('Opening the checkbox page');
        cy.visit(checkBoxUrl);

        cy.log('Checking the first checkbox of the page');
        cy.get(CheckboxPageEnum.CHECKBOX_1).check();
        cy.log('Asserting that the first checkbox is checked');
        cy.get(CheckboxPageEnum.CHECKBOX_1).should('be.checked');
        cy.log('Unchecking the first checkbox of the page');
        cy.get(CheckboxPageEnum.CHECKBOX_1).uncheck();
        cy.log('Asserting that the first checkbox is not checked');
        cy.get(CheckboxPageEnum.CHECKBOX_1).should('be.not.checked');

        cy.log('Checking the second checkbox of the page');
        cy.get(CheckboxPageEnum.CHECKBOX_2).check();
        cy.log('Asserting that the second checkbox is checked');
        cy.get(CheckboxPageEnum.CHECKBOX_2).should('be.checked');
        cy.log('Unchecking the second checkbox of the page');
        cy.get(CheckboxPageEnum.CHECKBOX_2).uncheck();
        cy.log('Asserting that the second checkbox is not checked');
        cy.get(CheckboxPageEnum.CHECKBOX_2).should('be.not.checked');
        
    });
});