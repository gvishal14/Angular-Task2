// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrl: './table.component.css'
// })
// export class TableComponent {
//   @Input() formData:{email:string, password:string}[] = [];



//   receiveFormData(formData: {email:string, password:string}){
//     if(formData){
//       this.formData.push(formData);
//     }

//   }

// }

// display-component.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  submittedData: any[] = [];

  constructor(private route: ActivatedRoute){}

  // ngOnInit(){
  //   this.route?.root?.firstChild.data.subscribe((data:any)=>{
  //     this.submittedData = data.state.submittedData || [];
  //   })
  // }

  receiveFormData(formData: any) {
    this.submittedData.push(formData);
  }
}

