import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hola Mundo</h1>
  `
})
export class HeavyLoadersSlowComponent {

}
