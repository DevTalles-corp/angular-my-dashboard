import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;



  constructor() {

    const start = Date.now();
    while( Date.now() - start < 3000 ) {}

    console.log('Cargado');
  }


}
