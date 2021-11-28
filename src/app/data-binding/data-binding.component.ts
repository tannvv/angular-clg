import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  name = 'Nguyễn Văn Tân';
  age! : number;
  constructor() { }

  ngOnInit(): void {
  }

}
