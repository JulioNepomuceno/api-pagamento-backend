## Começando

Criação do projeto:

```bash
yarn init -y

Instalação das dependências necessárias desse projeto:

```bash
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn add cors
yarn add express-async-errors

Inicialização do typescript

```bash
yarn tsc --init

Rodar o projeto com typescript

```bash
yarn add ts-node-dev -D
#ou
#No arquivo package.json crie essa linha abaixo, assim o comando para executar o projeto sera "yarn dev"
 "scripts": {
    "dev": "ts-node-dev src/server.ts"
  }
