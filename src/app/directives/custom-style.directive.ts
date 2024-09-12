import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {
  @Input('appCustomStyle') customColor: string = 'red'; // Input property to accept custom color

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Initial style application if needed
    this.setBackgroundColor(this.customColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('lightblue'); // Change background color on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.customColor); // Revert to original color
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
