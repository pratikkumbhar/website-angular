import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
