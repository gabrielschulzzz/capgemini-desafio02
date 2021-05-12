# Divulga Tudo

A agência Divulga Tudo precisa de um programa para gerenciar os seus anúncios online. O objetivo dos anúncios faz parte de uma campanha nas redes sociais. O sistema de gerenciamento permitirá a gestão do anúncio e o rastreio dos resultados da campanha.

# Instalacao

## Backend

- Para inicializar o servidor, necessaria a instalacao do [Node](https://nodejs.org/en/) e [Docker](https://www.docker.com/)

- Apos isso executar o comando na pasta backend do projeto para instalar os containers.

```bash
docker-compose up -d
```

- Com as imagens instaladas execute este comando para rodar as migrations do banco de dados.

```bash
npm typeorm migration:run
```

## Frontend

- Para executar o frontend executar o comando na pasta frontend
```bash
npm start
```

# Testes

- Para rodar os testes no servidor executar o comando na pasta backend

```bash
npm test
```

