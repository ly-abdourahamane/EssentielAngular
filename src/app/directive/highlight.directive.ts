import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private _defaultColor = 'red';
  @Input('appHighlight') hightlightColor: string;

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'color', this._defaultColor);
  }

  /**
   * fonction executée lorsque le pointeur d la souris est sur l'élément
   */
  @HostListener('mouseenter') onMouseEnter() {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'color', this.hightlightColor);
    console.log('mouseenter: pointe sur l\'élément');
  }

  /**
   * fonction executée lorsque le pointeur de la souris quitte l'élément
   */
  @HostListener('mouseleave') onMouseLeave() {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'color', this._defaultColor);
    console.log('mouseleave: quite élément');
  }
}
