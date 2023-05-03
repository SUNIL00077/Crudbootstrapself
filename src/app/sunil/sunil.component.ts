import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SunilService } from '../sunil.service';
import { sunilobj } from './sunil_modal';

@Component({
  selector: 'app-sunil',
  templateUrl: './sunil.component.html',
  styleUrls: ['./sunil.component.scss']
})
export class SunilComponent implements OnInit {

  sunya: any;
  formValue!: FormGroup;
  showadd!: boolean;
  showupdate!: boolean;
  sunildata: sunilobj = new sunilobj;

  constructor(private formBuilder: FormBuilder, private sunil: SunilService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required]
    })
    this.getdata();
  }

  add() {
    this.showadd = true;
    this.showupdate = false;
  }

  edit(data: any) {
    this.showupdate = true;
    this.showadd = false;

    this.sunildata.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['city'].setValue(data.city)
  }

  //update on edit
  updatedata() {
    this.sunildata.name = this.formValue.value.name;
    this.sunildata.email = this.formValue.value.email;
    this.sunildata.mobile = this.formValue.value.mobile;
    this.sunildata.city = this.formValue.value.city;

    this.sunil.updatesunil(this.sunildata, this.sunildata.id).subscribe(res => {
      this.getdata();
      alert('Record updated successfully')
      let sen = document.getElementById('cancel')
       sen?.click();
       this.formValue.reset();
    },
      err => {
        alert('something went wrong')
      }
    )
  };

  adddata() {
    this.sunildata.name = this.formValue.value.name;
    this.sunildata.email = this.formValue.value.email;
    this.sunildata.mobile = this.formValue.value.mobile;
    this.sunildata.city = this.formValue.value.city;

    this.sunil.postsunil(this.sunildata).subscribe(res => {
      // console.log(res)
      let ref = document.getElementById('cancel');              //for model closing
      ref?.click();
      this.formValue.reset();
      this.getdata();
      alert('Record added successfully')
    },
      err => {
        alert('something went wrong')
      })
  }

  //getdata
  getdata() {
    this.sunil.getsunil().subscribe(res => {
      this.sunya = res;
    })
  }

  //delete data
  deletedata(data:any){
    if(confirm('Are you sure to delete record ?'))
    this.sunil.deletesunil(data.id).subscribe(res =>{
     alert('Record delete successfully');
     this.getdata();
    })
  }

}
