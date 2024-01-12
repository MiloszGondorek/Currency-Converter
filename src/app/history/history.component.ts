import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';


@Component({
  selector: 'history',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.sass',
})

export class History {
  @ViewChild(TableComponent) table!: TableComponent;
  addToHistory(data: any) {
    const table=this.table;
    table.AddRow(data);
    if(table.rows.length>10){
      table.rows.splice(0,1);
    }
  }
}
