import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // As inputs properties também podem ser definidos como metadado no decorator @Component
  // inputs: ['nomeDoCurso'] ou inputs: ['nomeDoCurso:curso'] = expondo curso e tendo variável local nomeDoCurso
  // no caso acima a variável 'nomeDoCurso' deve estar definida no componente
})
export class InputPropertyComponent implements OnInit {


  // O decorator @Input permite que valores sejam passados por componentes pais.
  // No caso, a propriedade nome ficará exposta para receber o valor do outro componente.
  // <app-input-property [nome]="variavelComponentePai"></app-input-property>

  // O decorator também pode receber como parâmetro uma string que será o real valor da input property exposta,
  // enquanto que a variável definida será para uso local e poderá ter outro nome:
  // @Input('nomeDoCurso') nome: string;
  // <app-input-property [nomeDoCurso]="variavelComponentePai"></app-input-property>
  @Input() nome!: string;
  nomeDoCurso!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
