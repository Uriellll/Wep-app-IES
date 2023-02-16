import { Login } from './../models/login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(login:Login):Observable<any>{
    let params = JSON.stringify(login);
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this.http.post('https://desa.ies-webcontent.com.mx/login',params,{headers:headers});

  }
}
