import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // console.log(element);
    // console.log(element.nativeElement);
    // element.nativeElement.style.color = 'blue';
    // element.nativeElement.style.background = 'red';
    // renderer.setStyle(element.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseover')
  setBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'red');
  }
  @HostListener('mouseleave')
  detachBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  }

}
