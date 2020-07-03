import React, { Component } from 'react';

export default class BarraProporcao extends Component {
  render() {
    const { inss, irpf, netSalary } = this.props;

    return (
      <div className="div-flex">
        <div className="bg-inss" style={{ width: inss + '%', height: '40px'}}/>
        <div className="bg-irpf" style={{ width: irpf + '%', height: '40px'}}/>
        <div className="bg-salario" style={{ width: netSalary + '%', height: '40px'}}/>        
      </div>
    );
  }
}