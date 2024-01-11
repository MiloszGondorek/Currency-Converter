import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(History) historyChild!: History;
  receiveData(data: any) {
    this.historyChild.myFunction(data);
  }  
}
