import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KatexRenderer } from './katex-renderer/katex-renderer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KatexRenderer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cfd-blog');
}
