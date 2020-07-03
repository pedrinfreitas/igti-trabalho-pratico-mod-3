import React, { Component } from 'react';

export default class ImputSalario extends Component {
  handleInputChange = (event) => {
    const newValue = +event.target.value;
    this.props.onSalarioChange(newValue);
  }

  render() {
    const { currentValue } = this.props;

    return (
      <div className="input-field col s12">
        <input
          type="number"          
          id="inputSalario"
          value={currentValue}
          onChange={this.handleInputChange}
          min="1000"
          step="100"
        />

        <label className="active" htmlFor="inputSalario">
          Sálario bruto
        </label>

      </div>
    )

  }
}