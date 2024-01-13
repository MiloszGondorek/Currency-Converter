import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Saved } from '../app.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.sass',
})
export class TableComponent {
  rows: Row[] = [];
  id = 0;

  public AddRow(data: any) {
    data.id = this.id;
    this.id++;
    let row = new Row(data);
    this.rows.push(row);
  }

  addToFav(id: number) {
    const data = this.rows.find((row) => row.id == id);
    if (data) {
      data.inHistory = false;
      Saved.addToRows(data);
    }
  }

  reomveFromFav(id: number, checkSaved: boolean) {
    const data = this.rows.find((row) => row.id == id);
    if (data) {
      data.inHistory = true;
      if (checkSaved) {
        Saved.removeFromRows(id);
      }
    }
  }

  SetRows(data: any) {
    this.rows = data;
  }
}

export class Row {
  public sourceCurrency: string;
  public sourceValue: number;

  public targetCurrency: string;
  public targetValue: number;

  public data: string;
  // @ts-ignore
  public inHistory: boolean;
  id: number = 0;

  constructor(data: any) {
    this.sourceCurrency = data.sourceCurrency;
    this.sourceValue = data.sourceValue;
    this.targetCurrency = data.targetCurrency;
    this.targetValue = data.targetValue;
    this.inHistory = data.inHistory;
    this.id = data.id;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    this.data = `${day}-${month}-${year}`;
  }
}
