import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-landing-page-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './landing-page-layout.component.html',
  styleUrl: './landing-page-layout.component.scss'
})
export class LandingPageLayoutComponent {

}
