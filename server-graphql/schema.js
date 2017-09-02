const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const casual = require('casual');
const Curso = require('./models/Curso')
const Profesor = require('./models/Profesor')

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
        cursos: () => Curso.query().eager('[profesor, comentarios]'),
        profesores: () => Profesor.query().eager('cursos'),
        curso: (rootValue, args) => Curso.query().eager('[profesor, comentarios]').findById(args.id),
        profesor: (rootValue, args) => Profesor.query().eager('cursos').findById(args.id)
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

addMockFunctionsToSchema({
    schema,
    mocks: {
        Curso: () => {
            return {
                id: casual.uuid,
                titulo: casual.sentence,
                descripcion: casual.sentences
            }
        },
        Profesor: () => {
            return {
                nombre: 'Lorgio Trinidad'
            }
        }
    },
    preserveResolvers: true
});

module.exports = schema;