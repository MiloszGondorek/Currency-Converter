import { Component  } from '@angular/core';
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
  table = [1, 2, 3, 4]
  myFunction() {
    this.table.push(this.table.length+1);
    console.log(this.table);
  }
}
