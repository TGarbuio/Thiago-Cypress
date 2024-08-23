# Projeto Thiago Siqueira Garbuio - Cypress 
Este projeto utiliza Cypress para realizar testes automatizados de FrontEnd e BackEnd sobre o desafio da CIAL para a vaga de QA PL da empresa. O projeto está configurado para rodar dentro de um container Docker.

## Pré-requisitos
- Docker instalado 
- Cypress instalado 
- Typescript instalado
- NodeJS intalado

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/TGarbuio/Thiago-Cypress.git
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
Para instalar o Docker, siga os passos abaixo:

1. **Baixe o Docker Desktop**:
   - Acesse o site oficial: [Docker Desktop](https://www.docker.com/products/docker-desktop).
   - Escolha a versão apropriada para o seu sistema operacional (Windows, macOS, ou Linux) e faça o download.

2. **Instale o Docker**:
   - **Windows/macOS**: Execute o instalador baixado e siga as instruções na tela.
   - **Linux**:
     - Abra o terminal e execute os seguintes comandos:
       ```bash
       sudo apt-get update
       sudo apt-get install docker-ce docker-ce-cli containerd.io
       ```

3. **Verifique a instalação**:
   - Execute o comando abaixo no terminal para verificar se o Docker está funcionando corretamente:
     ```bash
     docker --version
     ```

4. **Inicie o Docker**:
   - **Windows/macOS**: Abra o Docker Desktop a partir do menu de aplicativos.
   - **Linux**: O Docker geralmente inicia automaticamente após a instalação. Caso contrário, inicie-o com:
     ```bash
     sudo systemctl start docker
     ```

5. **Adicione seu usuário ao grupo Docker** (opcional, para evitar usar `sudo`):
   ```bash
   sudo usermod -aG docker $USER


// Thiago Cypress\my-docker-project>docker run -d --name my-running-app my-node-app
// imagem gerada: 5af309726b90afd42cb0cf8b7f55948e2733716f1ccc2aa781b8d0cc39cd8843
