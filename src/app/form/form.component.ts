import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  email:string = '';
  password: string = '';

  constructor(private router: Router){}

  @Output() formDataEvent = new EventEmitter<{email: string, password:string}>();

  onSignIn(){

    this.formDataEvent.emit({email:this.email, password:this.password});
     this.router.navigate(['/table']);
  }

}
