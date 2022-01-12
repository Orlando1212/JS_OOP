class Animal{
  
  constructor(){
    this.cor = ""
    this.peso = 0
    this.tamanho = 0
  }
  
  correr(){
    return "correr"
  }
  
  dormir(){
    return "dormir"
  }

}

class Cao extends Animal{
    
  latir(){
    return "latir"
  }  
}

class Passaro extends Animal{
  voar(){
    return "voar"
  }
}
