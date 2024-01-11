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
  myFunction(data: any) {
    this.table.AddRow(data);
  }
}
