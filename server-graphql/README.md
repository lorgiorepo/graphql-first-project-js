# Server Graphql

First project for server and client on graphql

To run this project
$ yarn run start

http://localhost:5678/graphiql

# Query with union type

```sh
{
  buscar(query: "GraphQL") {
    __typename
    ... on Profesor {
      nombre
    }
    ... on Curso {
      titulo
    }
  }
}
```
