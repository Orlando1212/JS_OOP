Hotel = new Object()
Hotel.quartos = 20
Hotel.ocupados = 15

Hotel.Verificar_Disponibilidade = function(){
  let res = Hotel.quartos - Hotel.ocupados
    return "Disponiveis =  " + res
}

console.log(Hotel.Verificar_Disponibilidade())