import * as urls from 'cypress/fixtures/urls.json'
import { DropdownPageEnum } from 'cypress/support/enums/dropdownPage.enum';

describe('Dropdown test', () => {
    const dropdownUrl = urls.dropdown;
    
    it('should select all the option of the dropdown', () => {
        cy.log('Opening the dropdown page');
        cy.visit(dropdownUrl);

        cy.log('Selecting the first option of the dropdown');
        cy.get(DropdownPageEnum.dropdownSelector).select(DropdownPageEnum.dropdownOption1);
        cy.log('Asserting that the first option is selected');
        cy.get(DropdownPageEnum.dropdownSelector).should('contain', DropdownPageEnum.dropdownOption1);

        cy.log('Selecting the second option of the dropdown');
        cy.get(DropdownPageEnum.dropdownSelector).select(DropdownPageEnum.dropdownOption2);
        cy.log('Asserting that the second option is selected');
        cy.get(DropdownPageEnum.dropdownSelector).should('contain', DropdownPageEnum.dropdownOption2);

    });
});