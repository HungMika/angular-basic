import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UppercasePipe } from '../shared/pipes/UppercasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CurrencyPipe, UppercasePipe, NgFor, NgClass, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //example of a text title object
  title = {
    name: 'Angular Application',
    version: '1.0.0',
    description: 'A simple Angular application',
  };

  isActive = true;

  isVisible = true;

  products = [
    {
      id: 1,
      name: 'Nintendo Switch',
      price: 6000000,
      image: 'assets/images/nintendoS1.jpg',
    },
    {
      id: 2,
      name: 'Nintendo Switch 2',
      price: 30000000,
      image: 'assets/images/nintendoS2.jpg',
    },
    {
      id: 3,
      name: 'Nintendo Switch OLED',
      price: 8000000,
      image: 'assets/images/nintendoOled.jpg',
    },
    {
      id: 4,
      name: 'Nintendo Switch Lite',
      price: 4000000,
      image: 'assets/images/nintendoSLite.jpg',
    },
    {
      id: 4,
      name: 'Nintendo 3DS',
      price: 2000000,
      image: 'assets/images/nintendo3ds.jpg',
    },
  ];

  // // example of a boolean flag
  // isDisable = true;

  // // example of a atributes
  // ImageContent = 'test image';

  // //example of an event handler
  // btnName = 'Click Me';
  // message = 'Hello, Angular!';
  // onButtonClick(): void {
  //   this.message = 'Button was clicked!';
  //   this.btnName = 'Clicked!';
  // }

  // updateField(): void {
  //   console.log('Field updated!');
  // }

  // // example of a method to 2-way bind a value
  // bindValue = '';
}
