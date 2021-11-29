import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSqrtService {
  public count = 0
  constructor() { }
  getCount():number{
    return this.count
  }
  getSqrt():number{
    return Math.sqrt(this.count)
  }
}
