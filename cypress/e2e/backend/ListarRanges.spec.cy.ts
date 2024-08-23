import * as urls from 'cypress/fixtures/urls.json'

describe('Test List Specific Range of Phones', () => {
    const envURL = urls.list_range;
    it('should return data for phones with ids 3, 5, and 10', () => {
      // Sent the GET request to API
      cy.request('GET', 'https://api.restful-api.dev/objects?id=3&id=5&id=10')
        .then((response) => {
          // Check the response is with 200 status
          expect(response.status).to.eq(200);
  
          // Check if de body response is array
          expect(response.body).to.be.an('array');
  
          // Check if the objects with ids 3, 5, and 10 are present
          const ids = response.body.map(obj => obj.id);
          expect(ids).to.include(3);
          expect(ids).to.include(5);
          expect(ids).to.include(10);
  
          // Log of returned data 
          cy.log('Dados retornados:', response.body);
        });
    });
  });