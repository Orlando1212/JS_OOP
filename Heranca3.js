/*

let nome = "notebook"
let preco = 1200


let produto = {
  nome,
  preco,
  exibirProduto(){
    console.log(`${this.nome},${this.preco}`)
  }
} 

produto.nome
produto.preco

*/


class Produto{
  
  constructor(){  
  this.nome = "Notebook"
  this.preco = 1200
  }
  exibirProduto(){
    console.log(`${this.nome},${this.preco}`)
  }
}

const produto = new Produto()

const pro = produto

pro.preco = 2000
produto.preco = 3000
console.log(produto.preco)
console.log(pro.preco)