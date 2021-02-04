import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  rrr = 'ASDGHFD';

  asyncValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('this is async value');
    }, 1000);
  });
  data = new Date();
  price = 100;
  user = {name: 'alex', age: 123, status: false}
  num = 9.2385465734;
}
