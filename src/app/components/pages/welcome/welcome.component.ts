import { PopupComponent } from './popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name= '';
  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const popup =this.matDialog.open(PopupComponent,{width:'350px'})
    popup.afterClosed().subscribe(item=>{
      this.name = item;
      

    })
  }
  

}

