import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UppercasePipe } from '../pipes/UppercasePipe.pipe';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductItem } from '../types/productItem';

@Component({
  selector: 'app-prod-item',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, UppercasePipe, NgFor, RouterOutlet, RouterLink],
  templateUrl: './prodItem.component.html',
  styleUrl: './prodItem.component.css',
})
export class ProdItemComponent implements OnChanges {
  //receive product data from parent component
  @Input() productProp: ProductItem[] = [];

  get totalPrice(): string {
    const sum = this.productProp.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return `Total: ${sum}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['productProp'].currentValue);
    console.log(changes['productProp'].previousValue);
  }

  //pass product id <number> to parent component
  @Output() dataEvent = new EventEmitter<number>();

  //function to emit product id to parent component
  handleDelete = (id: number) => {
    console.log('Product:', id);
    this.dataEvent.emit(id);
  };
}
