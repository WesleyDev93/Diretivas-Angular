import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //criando nosso array, que pode vir de API

  produtos:string [] =[];
  menuType: string = "";


  constructor () {
 //  Como não temos API vamos criar nossos itens

    this.produtos = ["Mouse", "Touch", "Teclado", "Pc"];

  }



  ngOnInit(): void {

  }

  // criando nossa função do botao
  // como a função esta conectada a produtos que é nosso array
  // qualquer comando da função irá alterar a lista diretamente
  // poderiamos apagar algo da lista como ultimo item pelo pop();

  adicionar (){

    this.produtos.push ('fone de ouvido', 'pen drive');


  }

  // criando a função que vai ser atrelada ao nosso laço no html
  // devemos passar index como parametro
  // vamos usar o slice() para deletar algo pela sua posição
  remover (index: number) {
    //aqui dizemos que sera apagado do index , e apenas 1 item deve ser apagado
       this.produtos.splice (index, 1);
  }


}
