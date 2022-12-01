## Começando

Criação do projeto:

```bash
yarn init -y
```
Instalação das dependências necessárias desse projeto:

```bash
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn add cors
yarn add express-async-errors
```
Inicialização do typescript

```bash
yarn tsc --init
```
Rodar o projeto com typescript

```bash
yarn add ts-node-dev -D

#ou no arquivo package.json crie essa linha abaixo, assim o comando para executar o projeto sera apenas "yarn dev"

 "scripts": {
    "dev": "ts-node-dev src/server.ts"
  }
  
```
Banco de dados usado foi Postgresql, junto com o ORM Prisma.io:

```bash

#Instalando o Prisma
 yarn add prisma

#Instalando o Prisma Client
yarn add @prisma/client

#Inicializando o Prisma
npx prisma init

#Executando as migration no Prisma
yarn prisma migrate dev

