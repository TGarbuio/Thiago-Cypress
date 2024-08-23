import * as urls from 'cypress/fixtures/urls.json'

describe('Test Get Phone by ID', () => {
    const envURL = urls.list_celularID;
    it('should return data for the phone with id 7', () => {
      // Envia uma requisição GET para a API
      cy.request('GET', 'https://api.restful-api.dev/objects/7')
        .then((response) => {
          // Valida que a resposta tem status 200
          expect(response.status).to.eq(200);
  
          // Valida que o corpo da resposta é um objeto
          expect(response.body).to.be.an('object');
  
          // Valida que o ID do objeto retornado é 7
          expect(response.body.id).to.eq(7);
  
          // Opcional: Valida outros campos do objeto (exemplo: nome, marca, etc.)
          expect(response.body).to.have.property('name');
          expect(response.body).to.have.property('brand');
          
          // Exemplo de verificação do nome do celular
          cy.log('Dados do celular retornado:', response.body);
        });
    });
  });
  