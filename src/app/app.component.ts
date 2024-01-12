import { Component, ViewChild } from '@angular/core';
import {Converter} from './converter/converter.component'
import {History} from './history/history.component'
import { Currencies } from './currencies';
import { Favourite,Saved } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Converter, History,Favourite],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Currency-Converter';

  @ViewChild(History) historyChild!: History;
  @ViewChild(Converter) converter!: Converter;
  @ViewChild(Favourite) favourite!: Favourite;

  receiveData(data: any) {
    const curreciesData=Currencies.getData();
    data.result=(curreciesData[data.target]/curreciesData[data.source] * data.value).toFixed(2);
    this.historyChild.addToHistory(data);
    this.converter.setResult(data.result);
    Saved.addToRows();
  }  
}
