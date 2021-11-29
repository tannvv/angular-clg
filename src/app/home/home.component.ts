import { ServiceSqrtService } from './../Service/service-sqrt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countHome : number = 0;
  countSqrtHome : number = 0;
  constructor(private serviceSqrt:ServiceSqrtService) { }

  ngOnInit(): void {
    this.countHome = this.serviceSqrt.count
    this.countSqrtHome = this.serviceSqrt.getSqrt()
    this.serviceSqrt.count++
  }

}
