import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { Saved } from '../app.component';

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

