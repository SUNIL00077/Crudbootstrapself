import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Students } from './student_modal';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
ss:any;
 Studentsobj:Students = new Students

formValue!: FormGroup;


  constructor(private sun:StudentService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required]

    })
    this.getstudentdata()
  }


postAllStudentData(){
  this.Studentsobj.name=this.formValue.value.name;
  this.Studentsobj.email=this.formValue.value.email;
  this.Studentsobj.mobile=this.formValue.value.mobile;
  this.Studentsobj.city=this.formValue.value.city;
  
  this.sun.postStudentData(this.Studentsobj).subscribe(res =>{
      alert('Data added suceessfully')
      console.log(res);
  })
}

getstudentdata(){
  this.sun.getStudentData().subscribe(res =>{
    console.log(res)
this.ss= res;
  })
}

}
