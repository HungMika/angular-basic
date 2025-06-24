import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //example of a text title object
  title = {
    name: 'Angular App',
    version: '1.0.0',
    description: 'A simple Angular application'
  };

  // example of a boolean flag
  isDisable = true;

  // example of a atributes
  ImageContent = "test image";
}
