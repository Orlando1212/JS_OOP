class Animal{
  
  constructor(mCor,mPeso,mTamanho){
    this.cor = mCor
    this.peso = mPeso
    this.tamanho = mTamanho
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
    
  constructor(mCor,mPeso,mTamanho,mOrelha){
    super(mCor,mPeso,mTamanho)
    this.tamanhoOrelha = mOrelha
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
  
  constructor(mCor,mPeso,mTamanho,mCantar){
    super(mCor,mPeso,mTamanho)
    this.cantar = mCantar
  }
  
  correr(){
    super.correr()
    console.log("passaro")
  }
    
  voar(){
    return "voar"
  }
}

 // const animal = new Animal("Amarelo",60,3)
// console.log(animal.cor)

const cao = new Cao("Verde",50,30,5)

console.log(cao.tamanho)


const passaro = new Passaro("Azul",10,30,true)

passaro.cantar