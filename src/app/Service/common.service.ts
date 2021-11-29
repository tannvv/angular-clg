import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  getData(data : string):void{
      console.log('Đây là data của service : ' + data)
  }
}
