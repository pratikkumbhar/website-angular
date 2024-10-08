import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
