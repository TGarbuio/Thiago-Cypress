# Projeto Thiago Siqueira Garbuio - Cypress 
Este projeto utiliza Cypress para realizar testes automatizados de FrontEnd e BackEnd para o desafio da empresa CIAL para. O projeto está configurado para rodar dentro de um container Docker.

## Pré-requisitos
- Docker instalado 
- Cypress instalado 
- Typescript instalado
- NodeJS intalado

### Passos
1. Clone o repositório:
   ```bash
   git clone <link-do-repositorio>
   cd cypress-project


#### Organização dos testes do projeto
``` markdown
.
`-- cypress/
      `-- downloads/
      |-- e2e/
         |-- backend/
            |-- AtualizarCampoEspecifico.spec.cy.ts
            |-- AtualizarTodosDadosCelular.spec.cy.ts
            |-- CadastrarCelular.spec.cy.ts
            |-- DeletarCelular.spec.cy.ts
            |-- ListarIdCelular.spec.cy.ts
            |-- ListarRanges.spec.cy.ts
            |-- ListaTodosCelulares.spec.cy.ts
         |-- frontend/
            |-- CheckboxesTest.spec.cy.ts
            |-- DragAndDropTest.spec.cy.ts
            |-- DropdownTest.spec.cy.ts
            |-- LoginTest.spec.cy.ts
            |-- RedirectLinkTest.spec.cy.ts
            |-- UploadTest.spec.cy.ts
      |-- fixtures/
      |-- support/
      `-- node_modules/

```

### Instalação do Docker



