import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import katex from 'katex';

@Component({
  selector: 'app-katex-renderer',
  imports: [CommonModule],
  templateUrl: './katex-renderer.html',
  styleUrl: './katex-renderer.css'
})
export class KatexRenderer implements AfterViewInit {
  @Input() latex: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const span = this.el.nativeElement.querySelector('span');
    if(span) {
      katex.render(this.latex, span, {
        throwOnError: false,
        displayMode: false
      });
    }
  }
}
