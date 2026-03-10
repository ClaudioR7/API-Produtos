# API de Pedidos

## Descrição

Esta é uma API REST desenvolvida em Node.js para gerenciamento de pedidos.
A aplicação permite realizar operações completas de CRUD (Create, Read, Update e Delete) em pedidos armazenados em um banco de dados MongoDB.

Cada pedido contém:

* Identificador do pedido
* Valor total
* Data de criação
* Lista de itens do pedido

Esta API foi desenvolvida com o objetivo de praticar conceitos de desenvolvimento backend utilizando Node.js e arquitetura básica de APIs REST.

---

# Tecnologias Utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* Insomnia (para testes da API)

---

# Estrutura do Projeto

```
Projeto-Jitterbit
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── orderController.js
│   │
│   ├── models
│   │   └── Order.js
│   │
│   └── routes
│       └── orderRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

Descrição das pastas:

* **config** → configuração de conexão com banco de dados
* **controllers** → lógica da aplicação
* **models** → estrutura dos dados no banco (schema)
* **routes** → definição das rotas da API

---

# Instalação do Projeto

Clone o repositório:

```
git clone https://github.com/seu-usuario/projeto-jitterbit.git
```

Entre na pasta do projeto:

```
cd projeto-jitterbit
```

Instale as dependências:

```
npm install
```

---

# Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/ordersdb
```

Esse arquivo define:

* Porta do servidor
* String de conexão com o MongoDB

---

# Executando o Projeto

Inicie o servidor com o comando:

```
node server.js
```

Se tudo estiver correto, aparecerá no terminal:

```
Servidor rodando na porta 3000
MongoDB conectado
```

A API estará disponível em:

```
http://localhost:3000
```

---

# Rotas da API

## Criar Pedido

**POST**

```
/order
```

Exemplo de Body:

```
{
 "numeroPedido": "v10089016vdb",
 "valorTotal": 10000,
 "dataCriacao": "2023-07-19T12:24:11.529Z",
 "items": [
  {
   "itemId": 2434,
   "quantidadeItem": 1,
   "valorItem": 1000
  }
 ]
}
```

---

## Listar Pedidos

**GET**

```
/order
```

Retorna todos os pedidos cadastrados.

---

## Buscar Pedido por ID

**GET**

```
/order/:id
```

Exemplo:

```
/order/v10089016vdb
```

---

## Atualizar Pedido

**PUT**

```
/order/:id
```

Exemplo:

```
/order/v10089016vdb
```

Body de exemplo:

```
{
 "value": 15000
}
```

---

## Deletar Pedido

**DELETE**

```
/order/:id
```

Exemplo:

```
/order/v10089016vdb
```

---

# Exemplo de Resposta da API

```
{
 "orderId": "v10089016vdb",
 "value": 10000,
 "creationDate": "2023-07-19T12:24:11.529Z",
 "items": [
  {
   "productId": 2434,
   "quantity": 1,
   "price": 1000
   }
 ]
}
```

---

# Testando a API

Você pode utilizar ferramentas como:

* Insomnia
* Postman

Essas ferramentas permitem testar requisições HTTP para verificar o funcionamento da API.

---

# Funcionalidades Implementadas

* Criar pedidos
* Listar pedidos
* Buscar pedido por ID
* Atualizar pedido
* Deletar pedido
* Integração com banco de dados MongoDB
* Estrutura organizada em controllers, models e routes

---

# Melhorias Futuras

Algumas melhorias que podem ser implementadas:

* Validação de dados
* Autenticação com JWT
* Paginação de resultados
* Documentação da API com Swagger
* Testes automatizados

---

# Autor
* Claudio Rocha Bastos Freire

Projeto desenvolvido para estudo de desenvolvimento backend utilizando Node.js e MongoDB.
