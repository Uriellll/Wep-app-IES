import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Form } from 'src/app/models/form';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form:FormGroup;
  public formRes:Form;

  constructor(private fb:FormBuilder, private fS:FormService, private _snackBar: MatSnackBar) { 
    this.formRes = new Form('','','','',[],'');
    this.form = this.fb.group({
      name:['',[Validators.required, this.spaceEnd]],
      surname:['',[Validators.required, this.spaceEnd]],
      smoke:['',Validators.required],
      read:['',Validators.required],
      books: this.fb.array([
        [],[],[]
      ]),
      status:['']
    })
   
  }

  ngOnInit(): void {
  }
  public save(){
    this.formRes.name = this.form.value.name;
    this.formRes.surname =this.form.value.surname;
    this.formRes.smoke =this.form.value.smoke;
    this.formRes.read =this.form.value.read;
    this.formRes.books = this.form.value.books;
    this.formRes.status = this.form.value.status;
    if(this.form.valid){
      this._snackBar.open('Formulario enviado con éxito','',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition: 'bottom'
      })
      this.form.reset();
    }else{
      this._snackBar.open('Ocurrió un error, form inválido','',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition: 'bottom'
      })
    }

    //subscribe to the service
    /* this.fS.saveForm(this.formRes).subscribe(
      response=>{
        console.log(response);
        
        
      },
      error=>{
        console.log(`Ocurrió un error ${error}`);
        

  }) */
  }
  get nameInvalid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }
  get surnameInvalid(){
    return this.form.get('surname')?.invalid && this.form.get('surname')?.touched;
  }
  get smokeInvalid(){
    return this.form.get('smoke')?.invalid && this.form.get('smoke')?.touched;
  }
  get readInvalid(){
    return this.form.get('read')?.invalid && this.form.get('read')?.touched;
  }
  get books(){
    return this.form.get('books') as FormArray;
  }
  spaceEnd(control: FormControl) {
    // Verifica si hay espacios en blanco al final de la cadena de texto
    const isWhitespace = (control.value || '').trim().length !== (control.value || '').length;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
