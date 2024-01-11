import { Component  } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.sass'
})

export class Converter {
  values=["PLN","EUR","USD","CZK"]
}

