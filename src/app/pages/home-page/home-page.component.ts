import { Component } from '@angular/core';
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent],
  template: `
    <app-home-page-hero-section />
  `,
  styles: ``
})
export class HomePageComponent {

}
