import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public login: Login = new Login('','');

  constructor(private fb:FormBuilder, private lS: LoginService) {
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
        alert('Entraste')
      },
      error=>{
        console.log(`Ocurrió un error ${error}`);
      }
    )




  }

}
