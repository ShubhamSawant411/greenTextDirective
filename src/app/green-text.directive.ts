import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGreenText]'
})
export class GreenTextDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'rgb(0,255,150)';
  }
}
