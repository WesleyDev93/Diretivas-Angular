import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {

  estilo: string = "disable";
  corFundo: string = "blue";
  corTexto: string = "black";
  // criando lista  e o item
  item:string = "";
  lista:string []= [];


  constructor () {

  }

  // criando a função para lista

  adicionarLista () {

    // inserindo metodo de push para a lista com o paramento do item que esta acima vazio
        this.lista.push (this.item);

  }



  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }
}
