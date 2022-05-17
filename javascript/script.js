function CalcularPedido(){ 
//entrada
Corte = document.getElementById('Corte').value
Barba = document.getElementById('Barba').value
Depilação = document.getElementById('Depilação').value

//Processamento

//Corte
if(Corte=="CT"){
    precocorte = "60,00"
}

else if(Corte=="CM"){
    precocorte = "45,00"
}

else{
    precocorte = "52,00"
}

//Barba
if(Barba == "S"){
    precobarba = "30,00"
}

else if(Barba == "M"){
precobarba = "45,00"
}

//Depilação
if(Depilação == "CQ"){
    precodepilar = "300,00"
}

else if(Depilação == "CF"){
    precodepilar = "250,00"
}

else{
    precodepilar = "850,00"
}
total = (precocorte) + (precobarba) + (precodepilar);
document.getElementById('total').value = total;

}

function finalizar(){
    total = document.getElementById('total').value;
    if (total == 0.00){  
      msg = "Você deve selecionar pelo menos 1 elemento da lista.";
    }
     else{
          msg =  "Pedido Cadastrado com Sucesso! ";
          msg += "Seu Pedido é R$ ";
          msg += total;
      }
      
      document.getElementById('msg').value = msg;
      
    }
