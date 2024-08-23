import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { url } from 'node:inspector';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'website';
  background: any;
}
