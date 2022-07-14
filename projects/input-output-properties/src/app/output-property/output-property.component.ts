import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  // A Output Property segue as mesmas possibilidades de declaração definidas em input-property.component.ts

  // O decorator @Output permite que o componente pai escute um evento que seja emitido daqui.
  // Por ser um evento a propriedade mudouValor ficará entre parênteses e receberá uma função definida no pai.
  // <app-output-property (mudouValor)="funcaoComponentePai"></app-output-property>
  // E então, toda vez que mudouValor emitir algo a função no componente pai será acionada
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(): void {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
