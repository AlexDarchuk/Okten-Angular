import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  user = {name: 'vasya',age: 45};
  //
  // submit(form: NgForm): void {
  //   console.log(form);
  // }
  name = new FormControl('', [Validators.required, Validators.minLength(10), this.customFukcValidator]);
  age = new FormControl('');
  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });
  xxx(myForm: FormGroup): void {
    console.log(myForm);
  }
  customFukcValidator(inputData: AbstractControl): any {
    console.log('test');
    if (inputData.value === 'fukc') {
      console.log(inputData);
      return {error: true, msg: 'fuck is present'};
    } else {
      return null;
    }
  }
}
