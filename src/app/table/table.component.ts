import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  formData: {email:string, password:string}[] = [];

  receiveFormData(formData: {email:string, password:string}){
    this.formData.push(formData);
  }

}
