import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
  @Input() appHighLight = ''
  constructor(private el: ElementRef) {
    console.log('HightLight call constructor' + this.appHighLight)
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight
  }

}
