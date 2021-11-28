import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-ng-for',
  templateUrl: './filter-ng-for.component.html',
  styleUrls: ['./filter-ng-for.component.scss']
})
export class FilterNgForComponent implements OnInit {
  option = 'all'
  arrWords = [
    {vn : 'Hành động', en : 'action', memorized : true},
    {vn : 'Hóng biến', en : 'drama', memorized : true},
    {vn : 'Yêu', en : 'love', memorized : false},
    {vn : 'Cái bàn', en : 'table', memorized : true},
    {vn : 'Phô mai', en : 'cheer', memorized : false},
    {vn : 'Ngồi', en : 'sit down', memorized : true}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  showFilter(memorized : boolean): boolean{
      if(this.option === 'all'){
        return true
      }
      if(this.option === 'memorized' && memorized){
        return true
      }
      if(this.option === 'unmemorized' && !memorized){
        return true
      }
      return false
  }

}
