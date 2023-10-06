# sistema-agricultores

## Configuração

1. Instale as dependências do projeto:

npm install


3. Configure as credenciais e informações do banco de dados no arquivo `config/config.json`.

4. Crie o banco de dados no MySQL usando um cliente MySQL ou a linha de comando:

CREATE DATABASE sistemaagricultores;


5. Execute as migrations do Sequelize para criar as tabelas no banco de dados:

npx sequelize-cli db:migrate


## Execução

1. Inicie o servidor de desenvolvimento:

tsc --watch
nodemon dist/index.js


O servidor estará disponível em `http://localhost:PORT`, onde `PORT` é a porta configurada no projeto, por exemplo '3001'.
