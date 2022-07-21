import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hooks';
  valor = 5
  ciclo = false;

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo(): void {
    this.ciclo = true;
  }
}
