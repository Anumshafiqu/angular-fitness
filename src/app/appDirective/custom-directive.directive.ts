import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {
  @Input() color !: string;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.background = '#f5f5f5'
    this.el.nativeElement.style.width = '400px'
    this.el.nativeElement.style.height = '320px'
    this.el.nativeElement.style.padding = '10px'
    this.el.nativeElement.style.border = '1px solid #ddd'
    this.el.nativeElement.style.borderRadius = '5px'
    this.el.nativeElement.style.background = this.color
    // this.el.nativeElement.classList.add('card-custom')
  }


}
