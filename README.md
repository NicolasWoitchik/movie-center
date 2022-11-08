# Teste desenvolvedor Node.js

Avisos antes de começar
Crie um repositório no seu GitHub sem citar nada relacionado a WA.
Faça seus commits no seu repositório.
Envie o link do seu repositório para o email do recrutador responsável.
Fique à vontade para perguntar qualquer dúvida aos recrutadores.

OBJETIVO: Consultar 200 filmes na API do Studio Ghibli, salvar algumas informações e disponibilizar endpoint para consultar esses filmes.

# Descrição do Projeto

Consultar 200 filmes na [API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API), no endpoint onde listam os mesmos.
Salvar as seguintes informações em alguma base de dados: titulo, titulo original, descrição, data de lançamento e a pontuação
Criar uma API para expor consultas a essa base de dados.
Um endpoint deve ser capaz de listar os filmes de forma paginada usando os parâmetros limit/offset, ordenando sempre pela data de lançamento.

# Critérios de avaliação:

- Sua aplicação atende funcionalmente o que foi pedido.
- Você documentou a maneira de configurar o ambiente e rodar sua aplicação na máquina do avaliador.
- Você seguiu as instruções enviadas.
- Documentação da API.
- Você segue as boas práticas de programação.
- O código escrito é fácil de entender e manter.

Pontos de atenção: 

1. Fique a vontade para adicionar bibliotecas externas ao projeto.
-----

## Pré requisitos
Tenha instalado em sua máquina o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/)
## Como inicializar o projeto

1) Clone o projeto
```bash
git clone https://github.com/NicolasWoitchik/serverless-customer-manager
```

2) Instale as dependencias
```bash
yarn
```

3) Renomeie o arquivo `.env.example` para `.env` e preencha os campos corretamente.
Ex:
```
MONGO_USERNAME=dev
MONGO_PASSWORD=example
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB_DATABASE=movies

MOVIES_BASE_URL=https://ghibliapi.herokuapp.com
```

4) Inicie o projeto
```bash
yarn start:dev
```

## Documentação
A documentação pode ser vista e testada a partir da inicialização do projeto utilizando a url http://localhost:3000/api

