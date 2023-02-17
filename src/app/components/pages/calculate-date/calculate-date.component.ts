import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-calculate-date',
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.css']
})
export class CalculateDateComponent implements OnInit {
  dateSel:Date = new Date();
  unit:string = '';
  quantity: number = 0;
  resDate:number = 0;;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  public sum(){
    if(this.unit != "" && this.quantity >0){
      if(this.unit == 'day'){
        this.resDate = this.dateSel.setDate(this.dateSel.getDate()+this.quantity);
      }else if(this.unit == 'month'){
        this.resDate= this.dateSel.setMonth(this.dateSel.getMonth()+this.quantity);
      }else{
        this.resDate = this.dateSel.setFullYear(this.dateSel.getFullYear() + this.quantity);
      }
      this.unit = '';
      this.quantity = 0;
      
    }else{
      this._snackBar.open('Llena todos los campos','',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition: 'bottom'
      })

    }
    
  }
  

}
