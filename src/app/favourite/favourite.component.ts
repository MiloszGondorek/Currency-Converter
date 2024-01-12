import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { Row } from '../table/table.component';

@Component({
  selector: 'favourite',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.sass',
})
export class Favourite {
  @ViewChild(TableComponent) table!: TableComponent;
  constructor() {
    Saved.subscribe(() => {
      this.getFav();
    });
  }
  addToFav(data: any) {
    const table = this.table;
    table.AddRow(data);
  }
  getFav() {
    this.table.SetRows(Saved.getData());
  }
}

export class Saved {
  static lastChange = 'asd';
  static rows: Row[] = [];
  private static subscriber: Function | undefined;
  static addToRows() {
    const data = { source: 'PLN', value: 123, target: 'EUR', result: 222 };
    this.rows.push(new Row(data));
    this.notifySubscribers();
  }
  static getData() {
    return this.rows;
  }
  static subscribe(callback: Function): void {
    this.subscriber = callback;
  }
  private static notifySubscribers(): void {
    if (this.subscriber) {
      this.subscriber();
    }
  }
}
