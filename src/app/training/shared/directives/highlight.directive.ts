import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    @Input() defaultColor = '';
    @Input() appHighlight = '';
    @Input() isHighlight = false;
    
    constructor(private el: ElementRef<HTMLElement>) { }

    ngOnInit(): void {
        this.highlight(this.isHighlight);
    }

    private highlight(isHighlight: boolean){
        this.el.nativeElement.style.backgroundColor = isHighlight ? this.appHighlight : this.defaultColor;
    }

}
