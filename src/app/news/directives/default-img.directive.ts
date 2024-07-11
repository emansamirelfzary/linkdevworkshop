import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[defaultImg]'
})
export class DefaultImgDirective {

  constructor(private el:ElementRef) { }

  @HostListener('error') onError(){
    const element: HTMLImageElement = this.el.nativeElement;
    element.src = 'assets/images/relative.jpg';
  }

}
