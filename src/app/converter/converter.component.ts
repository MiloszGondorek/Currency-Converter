import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.sass',
})
export class Converter {
  values = ['PLN', 'EUR', 'USD', 'GBP', 'CAD'];

  sourceCurrency='PLN';
  sourceValue = 0;
  targetCurrency = 'EUR';

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
  sendData() {
    const data={source:this.sourceCurrency,value:this.sourceValue,target:this.targetCurrency}
    this.dataEvent.emit(data);
  }
}

/*
  EUR 1
  PLN 4.34
  USD 1.09
  GBP 0.86
  CAD 1.46
  */
