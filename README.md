# back-3
## Entrar dentro do container
```bash
docker exec -it back3-api bash
 ```
## Reiniciar container
```docker-compose down
docker-compose up --build
 ##instalar libs
 npm i dotenv
 npm i knex
 npm i mysql2


## O que fazer quando a migraçao dá errado
TablePlus
    1. Apaga o banco de dados `drop schema db;`
    2. Cria o banco de dados `create schema db;`
