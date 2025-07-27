import { Component, Input } from '@angular/core';
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
export class ProdItemComponent {
  @Input() productProp: ProductItem[] = [];
}
