import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpin]'
})
export class SpinDirective {


  @HostBinding('class.spin') animate = false
  @HostListener('click') myClick(){
    this.animate = true ; 
    setTimeout(() => {
      this.animate = false
    }, 400);
  }

}
