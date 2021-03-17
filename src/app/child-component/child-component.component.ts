import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  @Output() inputValueFromChildX: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  emitValueX(value: string) {
    this.inputValueFromChildX.emit(value);
  }

  actionOK() {
    console.log('actionOK')
  }
}
