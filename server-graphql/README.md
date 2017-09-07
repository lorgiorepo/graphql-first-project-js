# Server Graphql

First project for server and client on graphql

To run this project
$ yarn run start

http://localhost:5678/graphiql

### Queries

### Query with union type for Buscar

```graphql
{
  buscar(query: "Whatever") {
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

### Query for test error handler

```graphql
mutation BorrarProfesor {
  profesorDelete(profesorId: 1) {
    nombre
  }
}
```
