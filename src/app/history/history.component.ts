import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { Saved } from '../app.component';

@Component({
  selector: 'history',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.sass',
})

export class History {

  @ViewChild(TableComponent) table!: TableComponent;

  constructor(){
    Saved.setHistory((num:number) => {
      this.table.reomveFromFav(num,false);
    });
  }

  addToHistory(data: any) {
    const table=this.table;
    data.inHistory=true;
    table.AddRow(data);
    if(table.rows.length>10){
      table.rows.splice(0,1);
    }
  }
  
}
