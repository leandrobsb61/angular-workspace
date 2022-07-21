import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {
  
  @Input() valorInicial: number = 10;

  constructor() { }

  ngOnChanges(): void {
    // dispara se o valor de @Input() valorInicial for alterado
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    // dispara se o valor de @Input() valorInicial for alterado
    this.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // dispara se o valor de @Input() valorInicial for alterado
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // dispara se o valor de @Input() valorInicial for alterado
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // dispara se o componente CicloComponent for destruído
    this.log('ngOnDestroy');
  }

  log(text: string): void {
    console.log(text);
  }

}
