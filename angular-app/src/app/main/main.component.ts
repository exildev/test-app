import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '<ng-content></ng-content>',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
