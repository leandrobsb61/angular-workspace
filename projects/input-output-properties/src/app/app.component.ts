import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeDoCurso: string = 'Angular';

  onMudouValor(event: any): void {
    console.log(event);
    
  }

}
