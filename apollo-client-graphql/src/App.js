import React, { Component } from 'react';
import './App.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  render() {
    if (this.props.data.loading) return <h1>Cargando</h1>

    const { cursos } = this.props.data;

    return (
      <div className="App">
        <h1>Listado de Cursos</h1>
        {cursos.map(curso => (
          <div className="Curso">
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <hr/>
            <p>Profesor: {curso.profesor.nombre}</p>
          </div>
        ))}
      </div>
    );
  }
}

const CursosQuery = gql`
  query CursosQuery {
    cursos {
      titulo
      descripcion
      profesor {
        nombre
      }
    }
  }
`

export default graphql(CursosQuery, {
  options: {
    pollInterval: 2000
  }
})(App);
