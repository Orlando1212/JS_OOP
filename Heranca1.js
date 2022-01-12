class Animal{
  
  constructor(){
    this.cor = ""
    this.peso = 0
    this.tamanho = 0
  }
  
  correr(){
    console.log("correr")
    console.log("como")
    console.log("um")
  }
  
  dormir(){
    return "dormir"
  }

}

class Cao extends Animal{
    
  constructor(){
    super()
    this.tamanhoOrelha = 0
  }
  
  correr(){
    super.correr()
    console.log("cao")
  }
  
  latir(){
    return "latir"
  }  
}

class Passaro extends Animal{
  voar(){
    return "voar"
  }
}

const cao = new Cao()

cao.correr()