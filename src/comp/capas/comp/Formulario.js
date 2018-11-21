import React from "react";

class Formulario extends React.Component {
  constructor(props){
    super(props);
    const valor = props.valor;
    this.state = {
      valor: valor
    };
  }
  handleOnChangeListener = ev => this.setState({ [ev.target.name] : ev.target.value });
  render() {
    const {valor:valor1} = this.state;
    return (
    <div className={'formulario'}>
       <input name="valor" onChange={this.handleOnChangeListener} value={ valor1 }/>
       <button className="btnEnviar">Enviar datos</button>
    </div>
    );
  }
}

export default Formulario;
