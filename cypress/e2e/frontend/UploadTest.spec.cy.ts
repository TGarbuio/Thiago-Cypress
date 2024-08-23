import * as urls from 'cypress/fixtures/urls.json';

describe('Upload test', () => {
    const uploadUrl = urls.upload;
    
    it('should upload a file', () => {
        cy.log('Opening the upload page');
        cy.visit(uploadUrl);

        const urlJson = 'cypress/fixtures/urls.json';
        cy.get('#file-upload').click()
        cy.get('input[type="file"]').attachFile(urlJson);
        // cy.get('#file-name').should('contain', 'example.pdf');
        // cy.log('Uploading a file');
        // cy.get(UploadPageEnum.fileInput).attachFile('example.json');
        // cy.log('Asserting that the file is uploaded');
        // cy.get(UploadPageEnum.uploadButton).click();
        // cy.get(UploadPageEnum.uploadedFiles).should('contain', 'example.json');
        
    });
});