// import { Component, EventEmitter, Output } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrl: './form.component.css'
// })
// export class FormComponent {
//   email:string = '';
//   password: string = '';

//   constructor(private router: Router){}

//   @Output() formDataEvent = new EventEmitter<{email: string, password:string}>();

//   onSignIn(){

//     if(this.email && this.password){
//       this.formDataEvent.emit({email:this.email, password:this.password});
//       console.log("Email and password")
//       this.router.navigate(['/table']);
//     }else {
//       console.error("Email and password are required");
//     }



//   }

// }


// form-component.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router){}
  submittedData: any[] = [];
  // @Output() formDataEvent = new EventEmitter<any>();

  formData = {
    name: '',
    email: ''
  };

  handleSubmit(){
    const navigationExtras: NavigationExtras ={
      state:{
        submittedData: this.submittedData
      }
    }
    this.router.navigate(['/table'], navigationExtras);
}

  onSubmit() {
    this.submittedData.push({...this.formData});
    this.formData = {
      name: '',
      email: ''
    };
    console.log("")

  }
  toggleEdit(index: number){
    console.log("Edit clicked for:" , index);
  }
  toggleDelete(index:number){
    this.submittedData.splice(index,1);
    console.log("Delete clicked for:", index)
  }
}
