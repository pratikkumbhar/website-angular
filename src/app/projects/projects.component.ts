import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
