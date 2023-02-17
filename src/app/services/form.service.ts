import { Injectable } from '@angular/core';
import { Form } from '../models/form';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }
  public saveForm(form:Form):Observable<any>{
    let params = JSON.stringify(form);
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this.http.post('http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil',params,{headers:headers});

  }
}
