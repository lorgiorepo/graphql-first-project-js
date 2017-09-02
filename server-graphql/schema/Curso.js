module.exports = `
    #Esto es un curso
    type Curso {
        id: ID!
        titulo: String!
        # Esta es la descripcion del curso
        descripcion: String!
        profesor: Profesor
        rating: Float @deprecated(reason: "Ya no se usara mas a partir del siguiente periodo academico")
        comentarios: [Comentario]
    }

    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }
`