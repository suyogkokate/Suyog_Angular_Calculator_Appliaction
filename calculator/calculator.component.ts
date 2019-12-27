import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  txt="";
  temp = "";
  optr = "";
  
  constructor() { }

  ngOnInit() {
  }

  show(val){

      this.txt += val;
  }
  clear(){

      this.txt = "0";
  }

  perform(optr){

      this.temp = this.txt;
      this.txt = "";

      this.optr = optr;
  }

  operate(){

      let result = 0;

      switch(this.optr)
      {
        case '+':  result = Number(this.temp) + Number(this.txt); break;
        case '-':  result = Number(this.temp) - Number(this.txt); break;
        case '*':  result = Number(this.temp) * Number(this.txt); break;
        case '/':  result = Number(this.temp) / Number(this.txt); break;
      }

      this.txt = result.toString();
  }
}
