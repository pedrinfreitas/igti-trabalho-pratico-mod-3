import React, { Component } from 'react';
import InputSalario from './components/inputSalario';
import ImputDesc from './components/inputDesc';
import BarraProporcao from './components/barraProporcao';

import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salario: 1000
    }
  }

  handleSalarioChange = (newValue) => {
    this.setState({ salario: newValue });
  }

  render() {
    const { salario } = this.state;

    const salarioObj = calculateSalaryFrom(salario);

    const {
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      percentINSS,
      percentIRPF,
      netSalary,
      percentNetSalary

    } = salarioObj;

    return (
      <div className="container">
        <h1 className="center">React Sálario</h1>

        <div className="row">
          <InputSalario
            currentValue={salario}
            onSalarioChange={this.handleSalarioChange}
          />
        </div>

        <BarraProporcao 
          inss={percentINSS}
          irpf={percentIRPF}
          netSalary={percentNetSalary}
        />

        <div className="row">
          <ImputDesc label="Base INSS" value={baseINSS} />
          <ImputDesc
            label="Desconto INSS"
            value={discountINSS}
            percentage={percentINSS}
            color={'color-inss'}
          />

          <ImputDesc label="Base IRPF" value={baseIRPF} />
          <ImputDesc 
            label="Desconto IRPF" 
            value={discountIRPF} 
            percentage={percentIRPF} 
            color={'color-irpf'}
          />

          <ImputDesc 
            label="Salário líquido" 
            value={netSalary} 
            percentage={percentNetSalary}
            color={'color-salario'}
          />
        </div>

      </div>
    )
  }
}
