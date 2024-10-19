import { Directive, ElementRef, HostListener } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Directive({
  selector: '[appScrolltotop]'
})
export class ScrolltotopDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  onClicked(){
    window.scrollTo({top:0, behavior:'smooth'})
  }

}
