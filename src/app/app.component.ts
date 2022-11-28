import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private el: ElementRef) {

  }
  className = new FormControl('');

  name = 'Angular ' + VERSION.major;
  forma: FormGroup = new FormGroup({
    name: new FormControl(''),
    tip: new FormControl(null),
  });

  model = [];
  showValues() {
    console.log(this.forma.value);
    console.log(this.className.value);
  }
  addValues() {
    this.model.push(this.forma.value);
    this.forma.reset();
    const toFocus = this.el.nativeElement.querySelector(".name")
    toFocus.focus()

  }
  returnType(item) {
    switch (item) {
      case 'number':
        return 0;
      case 'string':
        return `""`;
      case 'Array':
        return '[]';
    }
  }
}
