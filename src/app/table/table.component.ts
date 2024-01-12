import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.sass',
})
export class TableComponent {
  rows: Row[] = [];

  public AddRow(data: any) {
    let row = new Row(data);
    this.rows.push(row);
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
  public favourite: boolean;

  constructor(data: any) {
    this.sourceCurrency = data.source;
    this.sourceValue = data.value;
    this.targetCurrency = data.target;
    this.targetValue = data.result;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    this.data = `${day}-${month}-${year}`;
  }
}
