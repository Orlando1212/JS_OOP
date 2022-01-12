class ContaBancaria{
  
  constructor(){
    this._numeroConta = 0
    this._saldo = 0
  }
  
  sacar(ValorSaque){
    this._saldo = this._saldo - ValorSaque
  }
  
  depositar(ValorDeposito){
    this._saldo = this._saldo + ValorDeposito
  }

  get saldo(){
    return this._saldo
  }
  
  set saldo(novoSaldo){
    this._saldo = novoSaldo
  }
  
  get numeroConta(){
    return this._numeroConta
  }
  
  set numertoConta(numero){
    this._numeroConta = numero
  }

}

let conta = new ContaBancaria()

conta.numeroConta = 60
conta.saldo = 500
conta.sacar(50)

console.log(conta.saldo)