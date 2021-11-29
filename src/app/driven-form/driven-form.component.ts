import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {
  name = '';
  constructor(private common : CommonService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.common.getData(this.name)
  }

}
