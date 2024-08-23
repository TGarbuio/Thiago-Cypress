import * as urls from 'cypress/fixtures/urls.json'
import { DragAndDropPageEnum } from 'cypress/support/enums/dragAndDropPage.enum';
import 'cypress-drag-drop';

describe('Drag and Drop test', () => {
    const dragAndDropUrl = urls.drag_and_drop;
    
    it('should drag and drop the first box into the second box', () => {
        cy.log('Opening the drag and drop page');
        cy.visit(dragAndDropUrl);
        cy.log('Dragging the first box into the second box');
        cy.get(DragAndDropPageEnum.COLUMN_A)
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 0, clientY: 0 })
            .trigger('mousemove', { clientX: 0, clientY: 100 })
            .trigger('mouseup');
        cy.log('Asserting that the first box is in the second column');
        cy.get(DragAndDropPageEnum.COLUMN_A).should('have.text', DragAndDropPageEnum.columnBText);
        cy.log('Asserting that the second box is in the first column');
        cy.get(DragAndDropPageEnum.COLUMN_B).should('have.text', DragAndDropPageEnum.columnAText);
        
    });
});