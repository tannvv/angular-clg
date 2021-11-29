import { ServiceSqrtService } from './../Service/service-sqrt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  countHome : number = 0;
  countSqrtHome : number = 0;
  constructor(private serviceSqrt: ServiceSqrtService) { }

  ngOnInit(): void {
      this.countHome = this.serviceSqrt.count
      this.countSqrtHome = this.serviceSqrt.getSqrt()
      this.serviceSqrt.count++
  }

}
