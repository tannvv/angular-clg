import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // formData : FormGroup = new FormGroup({
  //   name : new FormControl(),
  //   age : new FormControl()
  // });
  profileData = this.formBuiler.group({
      name : ['',Validators.required],
      age : ['',Validators.required]
  })
  constructor(private common:CommonService,
     private formBuiler : FormBuilder ) { }

  ngOnInit(): void {
  }
  onSubmit():void{
      this.common.getData(this.profileData.value)
  }
}
