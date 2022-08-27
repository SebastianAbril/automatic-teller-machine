import './Header.css';
import logo from '../media/logo.png';
export const Header = () => {
  return (
    <header className="header">
      <div className="name-container">
        <p className="bank-name">ATM BANCOSOFT</p>
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="header-menu">
        <label>Mi cuenta</label>
        <label>Acerca mi </label>
        <label>Donaciones</label>
      </div>
    </header>
  );
};
