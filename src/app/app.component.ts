import { Component } from '@angular/core';
import {Converter} from './converter/converter.component'
import {History} from './history/history.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Converter, History],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Currency-Converter';
}
