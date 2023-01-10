import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  dni: number;
  estado: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = {
    name: '',
    dni: '',
    estado: '',
  };

  valores = '';

  onSubmit(values: any): void {
    console.log('Form Values: ', values);
    this.valores = values;
  }
}
