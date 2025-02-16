import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-landing-page-layout',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './landing-page-layout.component.html',
  styleUrl: './landing-page-layout.component.scss'
})
export class LandingPageLayoutComponent {

}
