import './MainScreen.css';

export const MainScreen = () => {
  return (
    <div className="MainScreen">
      <div className="buttons-container">
        <button className="button">Consulta de saldo</button>
        <button className="button">Retiro de efectivo</button>
        <button className="button">Deposito de efectivo</button>
        <button className="button">Salir</button>
      </div>

      <div className="response-container">
        <div className="response"> AQUI VA LA RESPONSE</div>
      </div>
    </div>
  );
};
