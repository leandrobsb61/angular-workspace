import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title = 'ChildComponent';

  constructor() { }

  ngOnInit(): void {
  }

  ok(): void {
    alert('ok');
  }

}
