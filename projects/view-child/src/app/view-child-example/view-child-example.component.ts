import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.css']
})
export class ViewChildExampleComponent implements OnInit {

  @ViewChild('campoInput') campoValorInput!: ElementRef // o tipo também poderia ser um componente filho, e ai se teria acesso aos seus métodos e variáveis
  @ViewChild('componentChild') component!: ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  mostraValorViewChild(): void {
    console.log(this.campoValorInput.nativeElement.value);
  }

  mostraInformacoesComponenteFilho(): void {
    console.log(this.component.title);
    this.component.ok();
  }

}
