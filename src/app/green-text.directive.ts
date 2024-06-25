import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appGreenText]'
})
export class GreenTextDirective {

  private hostElementRef = inject<ElementRef>(ElementRef);
  constructor(private el: ElementRef) {
    this.hostElementRef.nativeElement.style.color = 'rgb(0,255,150)';
  }
}
