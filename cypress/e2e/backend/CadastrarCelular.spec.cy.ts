import * as urls from 'cypress/fixtures/urls.json'

describe('Test Create New Object', () => {
    const envURL = urls.register_new_cell;
    const newObjectData = {
      name: 'Apple MacBook Pro 16',
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };
    it('should create a new object with the specified data', () => {
      // Sent the POST request to register new object
      cy.request({
        method: 'POST',
        url: urls.register_new_cell,
        body: newObjectData,
        failOnStatusCode: false // Optional: To avoid automatic fails in different status
      }).then((response) => {
        // Validate if the response is 201 status (or 200, if the API does not return a specific status for creation)
        expect(response.status).to.eq(201); // Ajuste para 200 se a API retornar 200
  
        // Validates that the response contains the data of the new object
        expect(response.body).to.deep.include(newObjectData);
  
        // Optional: Checks if the new object can be retrieved by the GET request"
        cy.request('GET', 'https://api.restful-api.dev/objects')
          .then((getResponse) => {
            // Validates that the GET request response has a status of 200
            expect(getResponse.status).to.eq(200);
  
            // Validates if the new object is present in the list of objects
            const objects = getResponse.body;
            const createdObject = objects.find(obj => obj.name === newObjectData.name);
            expect(createdObject).to.not.be.undefined;
            expect(createdObject.data).to.deep.equal(newObjectData.data);
  
            // Log of the returned data
            cy.log('Novo objeto criado:', createdObject);
          });
      });
    });
  });
  