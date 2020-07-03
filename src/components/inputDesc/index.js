import React, { Component } from 'react';
import { formatPercentage, formatMoney } from '../../helpers/formatters';

export default class ImputDesc extends Component {
  render() {
    const { color = '', value, percentage = 0, label } = this.props;
    
    const id = 'input_' + label;
    const percentualFormatado = percentage > 0 ? `(${formatPercentage(percentage)})` : ''; 
    const valorFormatado = `${formatMoney(value)} ${percentualFormatado}`;

    return (
      <div className="input-field col s12 m6 l3">
        <input
          id={id}
          className={color}
          value={valorFormatado}
          readOnly          
        />

        <label className="active" htmlFor="{id}">
          {label}
        </label>

      </div>
    )

  }
}