import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //example of a text title object
  title = {
    name: 'Angular Application',
    version: '1.0.0',
    description: 'A simple Angular application',
  };

  // example of a boolean flag
  isDisable = true;

  // example of a atributes
  ImageContent = 'test image';

  //example of an event handler
  btnName = 'Click Me';
  message = 'Hello, Angular!';
  onButtonClick(): void {
    this.message = 'Button was clicked!';
    this.btnName = 'Clicked!';
  }

  updateField(): void {
    console.log('Field updated!');
  }

  // example of a method to 2-way bind a value
  bindValue = '';
}
