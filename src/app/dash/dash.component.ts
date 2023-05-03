import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashService } from '../dash.service';
import { studentdata } from './dash_modal';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  // searchText:any;
  constructor(private formBuilder:FormBuilder, private dash:DashService) { }

  showadd!:boolean;
showupdate!:boolean;
// studentmodalobj:studentdata=new studentdata
studentmodalobj:studentdata = new studentdata;
allstudentdata:any;
formValue!:FormGroup;

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required],
    })
     this.getdata();
  }

add(){
  this.showadd=true;
  this.showupdate=false;
}

edit(data:any){
  this.showadd=false;
  this.showupdate=true;

  this.studentmodalobj.id = data.id;
  this.formValue.controls['name'].setValue(data.name)
  this.formValue.controls['email'].setValue(data.email)
  this.formValue.controls['mobile'].setValue(data.mobile)
  this.formValue.controls['city'].setValue(data.city)
}
// edit(data:any){
//   this.showadd=false;
//   this.showupdate=true

//   this.studentmodalobj.id =data.id;
//   this.formValue.controls['name'].setValue(data.name)
//   this.formValue.controls['email'].setValue(data.email)
//   this.formValue.controls['mobile'].setValue(data.mobile)
//   this.formValue.controls['city'].setValue(data.city)
// }

//update on edit
update(){
  this.studentmodalobj.name = this.formValue.value.name;
  this.studentmodalobj.email = this.formValue.value.email;
  this.studentmodalobj.mobile = this.formValue.value.mobile;
  this.studentmodalobj.city = this.formValue.value.city;

  this.dash.updatestudent(this.studentmodalobj,this.studentmodalobj.id).subscribe(res =>{
    this.getdata();
    this.formValue.reset();
    alert('Record updated successfully')
  },
  err =>{
    alert('Something went wrong')
  })
}
// update(){
//   this.studentmodalobj.name = this.formValue.value.name;
//   this.studentmodalobj.email = this.formValue.value.email;
//   this.studentmodalobj.mobile = this.formValue.value.mobile;
//   this.studentmodalobj.city = this.formValue.value.city;

//   this.dash.updatestudent(this.studentmodalobj,this.studentmodalobj.id).subscribe(res =>{
//     this.getdata();
//     this.formValue.reset();

// alert('Record updated successfully')
//   },
//   err =>{
//     alert('Something went wrong')
//   })
// };

addstudent(data:any){
  this.dash.poststudent(data).subscribe(res =>{
  console.log(res);
  this.formValue.reset();
  this.getdata();
  alert('Record added successfully');
  },
  err =>{
    alert('something went wrong')
  })
}
// addstudent(data:any){
//   // this.studentmodalobj.name = this.formValue.value.name;            //not any change use or not
//   // this.studentmodalobj.email = this.formValue.value.email;
//   // this.studentmodalobj.mobile = this.formValue.value.mobile;
//   // this.studentmodalobj.city = this.formValue.value.city;

//   this.dash.poststudent(data).subscribe(res =>{
//     console.log(res);
//     this.formValue.reset();
//      this.getdata();
//     alert('Record added successfully')
//   },
//   err =>{
//     alert('something went wrong')
//   }
//   )
// };

// getdata
getdata(){
  this.dash.getstudent().subscribe(res =>{
    this.allstudentdata=res;
  })
}
// getdata(){
//   this.dash.getstudent().subscribe(res =>{
//     this.allstudentdata=res;
//   })
// }

//delete
deletedata(data:any){
  this.dash.deletestudent(data.id).subscribe(res =>{
alert('Record deleted successfully')
 this.getdata();
  })
}
// deletedata(data:any){
//   if(confirm("Are you sure to delete?"))
//   this.dash.deletestudent(data.id).subscribe(res =>{
// alert("Record deleted successfully")
// this.getdata();
//   })
// }

}
