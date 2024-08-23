# Use a imagem base do Node.js versão 14
FROM node:14

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o resto dos arquivos da aplicação
COPY . .

# Comando padrão ao rodar o contêiner
CMD ["node", "app.js"]