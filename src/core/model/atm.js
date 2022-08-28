export class ATM {
  constructor(saldo) {
    this._saldo = saldo;
  }

  //metodos
  retirarDinero(value) {
    if (value <= this.saldo) {
      this._saldo = this._saldo - value;
    } else {
      console.log('No tienes suficiente dinero');
    }
  }

  depositarDinero(value) {
    this._saldo = this._saldo + value;
  }

  //getters
  get saldo() {
    return this._saldo;
  }

  //setters
}
