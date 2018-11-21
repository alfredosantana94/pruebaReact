import React, {Component} from 'react';
import Cabecera from '../Header';
import Formulario from './comp/Formulario';
class Lista extends Component {
  render(){
  return(
    <div>
      <Cabecera texto='Estas en lista'/>
      <h1>Bienvenido a la lista</h1>
      <Formulario/>
    </div>
    )
  }
}
export default Lista;
