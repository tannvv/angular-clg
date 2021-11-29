import { HttpService } from './../Service/htpp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private httpService: HttpService ) { }

  ngOnInit(): void {
      this.httpService.getComments().subscribe(data => {
          console.log(data)
      })
      this.httpService.getUsers(5).subscribe(data => {
          console.log(data)
      })
  }



}
