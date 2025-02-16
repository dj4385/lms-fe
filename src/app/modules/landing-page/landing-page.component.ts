import { Component } from '@angular/core';
import { HeroSectionComponent } from "./_components/hero-section/hero-section.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
