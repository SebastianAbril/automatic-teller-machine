import './MainScreen.css';
import { useState } from 'react';
import { ATM } from '../../../core/model/atm';
import { Response } from '../../components/Response/Response';

const cajero = new ATM(10000);

export const MainScreen = () => {
  const [response, setResponse] = useState('¡Bienvenido a BANCOSFOT!');
  const [deposit, setDeposit] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);

  return (
    <div className="MainScreen">
      <div className="container">
        <div className="buttons-container">
          <button
            className="button"
            onClick={() => {
              setResponse(`Su saldo total es de $${cajero.saldo} USD`);
            }}>
            Consulta de saldo
          </button>
          <button
            className="button"
            onClick={() => {
              setResponse('Ingrese el monto del valor a retirar');
              setWithdrawal(true);
              setDeposit(false);
              cajero.retirarDinero(200);
            }}>
            Retiro de efectivo
          </button>
          <button
            className="button"
            onClick={() => {
              cajero.depositarDinero(1000);
              setDeposit(true);
              setWithdrawal(false);
              setResponse(`Ahora su nuevo saldo es ${cajero.saldo}`);
            }}>
            Deposito de efectivo
          </button>
          <button className="button">Salir</button>
        </div>

        <div className="response-container">
          <Response isDeposit={deposit} isWithdrawal={withdrawal} />
          <div className="response"> {response}</div>
        </div>
      </div>
    </div>
  );
};
