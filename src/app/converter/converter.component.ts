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
  result=0;

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
  sendData() {
    const data={sourceCurrency:this.sourceCurrency,sourceValue:this.sourceValue,targetCurrency:this.targetCurrency,result:0}
    this.dataEvent.emit(data);
  }
  
  setResult(result:number){
    this.result=result;
  }

}

