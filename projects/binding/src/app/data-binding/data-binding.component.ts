import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com.br/100/100';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  func(): string {
    return 'retorno da função';
  }

  botaoClicado(): void {
    alert('botão clicado');
  }

  onKeyup(evento: KeyboardEvent): void {
    // o 'evento.target' é do tipo HTMLInputElement
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

}
