import { Component, DoCheck, OnInit } from '@angular/core';

import { NgClass, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductItem } from '../shared/types/productItem';
import { ProdItemComponent } from '../shared/product-item/prodItem.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgIf, ProdItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, DoCheck {
  //example of a text title object
  title = {
    name: 'Angular Application',
    version: '1.0.0',
    description: 'A simple Angular application',
  };

  isActive = true;

  buttonText = 'Hide';

  isVisible = true;

  constructor() {
    console.log('HomeComponent initialized');
  }

  ngOnInit(): void {
    console.log('HomeComponent ngOnInit called');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetched posts:', json);
      });
  }

  ngDoCheck(): void {
    console.log('HomeComponent ngDoCheck called');
  }

  handleChangeVisibility(): void {
    this.isVisible = !this.isVisible;
    this.buttonText = this.isVisible ? 'Hide' : 'Show';
  }

  products: ProductItem[] = [
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

  handleDelete = (event: number) => {
    console.log('ID received:', event);
    const productIndex = this.products.findIndex((item) => item.id === event);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }

    this.products = this.products.filter((item) => item.id !== event);
  };

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
