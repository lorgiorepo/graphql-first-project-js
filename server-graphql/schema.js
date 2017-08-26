const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = `
    # Esto es un curso
    type Curso {
        id: ID!
        titulo: String!
        # Esta es la descripcion del curso
        descripcion: String!
        profesor: Profesor
        rating: Float @deprecated(reason: "Ya no se usara mas a partir del siguiente periodo academico")
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

const resolvers = {
    Query: {
        cursos: () => {
            return [{
                id: 1,
                titulo: 'Curso de Graphql',
                descripcion: 'Aprendiendo Graphql'
            }, {
                id: 2,
                titulo: 'Curso de Java',
                descripcion: 'Aprendiendo Java'
            }]
        }
    },
    Curso: {
        profesor: () => {
            return {
                nombre: 'Lorgio'
            }
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;