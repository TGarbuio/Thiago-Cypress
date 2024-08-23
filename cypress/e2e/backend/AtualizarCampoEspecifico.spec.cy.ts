import * as urls from 'cypress/fixtures/urls.json'


describe('Test Update Field of Object by ID', () => {
    const envURL = urls.update_spec_field;
    const updateData = {
      name: 'Apple MacBook Pro 16 (Updated Name)'
    };
  
    it('should update the name field of the object with id 7', () => {
      // Sent the PUT request to update the field object
      cy.request({
        method: 'PUT',
        url: 'https://api.restful-api.dev/objects/7',
        body: updateData,
        failOnStatusCode: false // Optional: To avoid automatic fails in different status
      }).then((response) => {
        // Check the response is 200 status
        expect(response.status).to.eq(200);
  
        // Check the response has the updated data
        expect(response.body).to.deep.include(updateData);
  
        // Sent the GET request to validate if the update was applied
        cy.request('GET', 'https://api.restful-api.dev/objects/7')
          .then((getResponse) => {
            // Check the request is 200 status
            expect(getResponse.status).to.eq(200);
  
            // Validates that the updated field is as expected
            expect(getResponse.body.name).to.eq(updateData.name);
  
            // Log of the returned data
            cy.log('Dados atualizados do objeto:', getResponse.body);
          });
      });
    });
  });
  