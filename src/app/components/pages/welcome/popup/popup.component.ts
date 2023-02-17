import {  MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  name = '';

  constructor(private Ref: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
    
  }
  closePopup(){
    this.Ref.close(this.name);
  }

}
