import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaText]'
})
export class MarcaTextDirective implements OnInit {
  @Input() colorBackground = 'yellow';
  @Input() colorText = 'white';

  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.changeBackground();
  }

  private changeBackground(color: string = 'yellow'){
    this.element.nativeElement.style.background = this.colorBackground || color;
    this.element.nativeElement.style.color = this.colorText;
    this.element.nativeElement.style.fontWeight = 'bold';
  }
}


// Nova directiva criada autotizada do zero