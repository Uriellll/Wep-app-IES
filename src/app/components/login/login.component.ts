import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public login: Login = new Login('','');
  public loading = false;

  constructor(private fb:FormBuilder, private lS: LoginService, private _snackBar: MatSnackBar, private router:Router) {
    this.form = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  public signIn(){
    this.login.username = this.form.value.userName;
    this.login.password = this.form.value.password;
    this.lS.login(this.login).subscribe(
      response=>{
        console.log(response);
        this.load();
        
      },
      error=>{
        console.log(`Ocurrió un error ${error}`);
        this._snackBar.open('Credenciales invalidas','',{
          duration:5000,
          horizontalPosition:'center',
          verticalPosition: 'bottom'
        })
        this.form.reset();
      }
    )




  }
  public load(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);

    },2000)
  }

}
