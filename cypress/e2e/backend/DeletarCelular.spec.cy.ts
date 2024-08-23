import * as urls from 'cypress/fixtures/urls.json'

describe('Test Create and Delete Object', () => {
    const envURL = urls.delete_cell;
    const objectData = {
      name: 'Apple MacBook Pro 16',
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };
    const objectId = 6; // Object ID for creation and deletion
    it('should create and then delete an object', () => {
      // Step 1: Create a new object
      cy.request({
        method: 'POST',
        url: urls.delete_cell,
        body: objectData,
        failOnStatusCode: false // Optional: prevent Cypress from failing on non-2xx statuses
      }).then((createResponse) => {
        // Validate that the creation response has status 201 (or 200 if your API returns that)
        expect(createResponse.status).to.eq(201); // Adjust to 200 if your API returns 200
  
        // Validate that the response includes the new object data
        expect(createResponse.body).to.deep.include(objectData);
  
        // Log success message
        cy.log('Object created successfully:', createResponse.body);
  
        // Step 2: Verify the object was created
        cy.request('GET', `https://api.restful-api.dev/objects/${objectId}`)
          .then((getResponse) => {
            // Validate that the GET response has status 200
            expect(getResponse.status).to.eq(200);
  
            // Validate that the created object is present
            expect(getResponse.body.name).to.eq(objectData.name);
            expect(getResponse.body.data).to.deep.equal(objectData.data);
  
            // Log success message
            cy.log('Object successfully retrieved:', getResponse.body);
  
            // Step 3: Delete the object
            cy.request({
              method: 'DELETE',
              url: `https://api.restful-api.dev/objects/${objectId}`,
              failOnStatusCode: false // Optional: prevent Cypress from failing on non-2xx statuses
            }).then((deleteResponse) => {
              // Validate that the delete response has status 200 (or 204 if your API returns that)
              expect(deleteResponse.status).to.eq(200); // Adjust to 204 if your API returns 204
  
              // Log success message
              cy.log('Object deleted successfully:', deleteResponse.body);
  
              // Step 4: Verify the object was deleted
              cy.request({
                method: 'GET',
                url: `https://api.restful-api.dev/objects/${objectId}`,
                failOnStatusCode: false
              }).then((getAfterDeleteResponse) => {
                // Validate that the GET response after delete has status 404
                expect(getAfterDeleteResponse.status).to.eq(404);
  
                // Log success message
                cy.log('Object not found after deletion:', getAfterDeleteResponse.body);
              });
            });
          });
      });
    });
  });
  