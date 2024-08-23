import * as urls from 'cypress/fixtures/urls.json'

describe('Test Update All Data of an Object', () => {
    const envURL = urls.update_data;
    const updatedObjectData = {
      name: 'Apple MacBook Pro 16',
      data: {
        year: 2019,
        price: 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
      }
    };
    const objectId = 7; // ID of the object to be updated
    it('should update all data of the object with the specified ID', () => {
      // Step 1: Update the object with new data
      cy.request({
        method: 'PUT',
        url: `https://api.restful-api.dev/objects/${objectId}`,
        body: updatedObjectData,
        failOnStatusCode: false // Optional: prevent Cypress from failing on non-2xx statuses
      }).then((updateResponse) => {
        // Validate that the update response has status 200 (or 204 if your API returns that)
        expect(updateResponse.status).to.eq(200); // Adjust to 204 if your API returns 204
        // Validate that the response includes the updated object data
        expect(updateResponse.body).to.deep.include(updatedObjectData);
        // Log success message
        cy.log('Object updated successfully:', updateResponse.body);
  
        // Step 2: Verify the object was updated
        cy.request('GET', `https://api.restful-api.dev/objects/${objectId}`)
          .then((getResponse) => {
            // Validate that the GET response has 200 status
            expect(getResponse.status).to.eq(200);
            // Validate that the updated object data is present
            expect(getResponse.body.name).to.eq(updatedObjectData.name);
            expect(getResponse.body.data).to.deep.equal(updatedObjectData.data);
            // Log success message
            cy.log('Object successfully retrieved after update:', getResponse.body);
          });
      });
    });
  });
  
