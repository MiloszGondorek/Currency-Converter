import { Component } from '@angular/core';
import {Converter} from './converter/converter.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Converter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Currency-Converter';
}
