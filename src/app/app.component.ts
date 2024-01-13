import { Component, ViewChild } from '@angular/core';
import { Converter } from './converter/converter.component';
import { History } from './history/history.component';
import { Currencies } from './currencies';
import { Favourite } from './favourite/favourite.component';
import { Row } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Converter, History, Favourite],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Currency-Converter';

  @ViewChild(History) historyChild!: History;
  @ViewChild(Converter) converter!: Converter;
  @ViewChild(Favourite) favourite!: Favourite;

  receiveData(data: any) {
    const curreciesData = Currencies.getData();
    data.targetValue = (
      (curreciesData[data.targetCurrency] /
        curreciesData[data.sourceCurrency]) *
      data.sourceValue
    ).toFixed(2);

    data.targetValue = this.getRandomInt(1, 1134);

    this.historyChild.addToHistory(data);
    this.converter.setResult(data.targetValue);
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}

export class Saved {
  static lastChange = 'asd';
  static rows: Row[] = [];
  private static subscriber: Function | undefined;
  private static history: Function | undefined;
  static addToRows(data: any) {
    this.rows.push(new Row(data));
    this.notifySubscribers();
  }
  static removeFromRows(id: number) {
    for (var i = 0; i < this.rows.length; i++) {
      if (this.rows[i].id == id) {
        this.rows.splice(i, 1);
        this.updateHistory(id);
        return;
      }
    }
  }
  static getData() {
    return this.rows;
  }
  static subscribe(callback: Function) {
    this.subscriber = callback;
  }
  private static notifySubscribers() {
    if (this.subscriber) {
      this.subscriber();
    }
  }
  static setHistory(history: Function) {
    this.history = history;
  }
  private static updateHistory(num: number) {
    if (this.history) {
      this.history(num);
    }
  }
}
