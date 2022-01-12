function ContarLetras(Produto){
  try{
    console.log(Produto.nome.length)
    console.log("passou")
  }
  catch(erro){
    console.log("Erro ao proseguir")
  }
}

const Produto = {
  nome:"Notebook",
  preco: 1200
}

ContarLetras(Produto)

