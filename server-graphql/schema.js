const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = `
    # Esto es un curso
    type Curso {
        id: ID!
        titulo: String!
        # Esta es la descripcion del curso
        descripcion: String!
        profesor: Profesor
        rating: Float
        comentarios: [Comentario]
    }

    type Profesor {
        id: ID!
        nombre: String!
        nacionalidad: String!
        genero: Genero
        cursos: [Curso]
    }

    enum Genero {
        MASCULINO
        FEMENINO
    }

    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }

    type Query {
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }
`

const schema = makeExecutableSchema({
    typeDefs
});

module.exports = schema;