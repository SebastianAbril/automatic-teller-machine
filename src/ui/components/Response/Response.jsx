import './Response.css';
// eslint-disable-next-line
export const Response = ({ isDeposit = false, isWithdrawal = false, isExit = false }) => {
  return (
    <>
      {isDeposit && (
        <div className="Deposito">
          <p>Ingresa el valor a depositar</p>
          <div>
            <input className="input-deposito" type="number" placeholder="Ingresa el monto" />
            <button className="button-deposito">OK</button>
          </div>
        </div>
      )}
      {isWithdrawal && <div className="Retiro">Soy un Retiro </div>}
      {isExit && <div>Soy la salida </div>}
    </>
  );
};
