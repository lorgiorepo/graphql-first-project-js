const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const casual = require('casual');
const resolvers = require('../resolvers');
const Profesor = require('./Profesor');
const Curso = require('./Curso');

const rootQuery = `
    union ResultadoBusqueda = Profesor | Curso

    type Query {
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
        buscar(query: String!): [ResultadoBusqueda]
    }

    type Mutation {
        profesorAdd(profesor: NuevoProfesor): Profesor
        profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
        profesorDelete(profesorId: Int!) : Profesor
    }
`

const schema = makeExecutableSchema({
    typeDefs: [rootQuery, Profesor, Curso],
    resolvers
});

if(false) {
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
}

module.exports = schema;