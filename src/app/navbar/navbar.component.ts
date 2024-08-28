import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  isActive:any
  
  navClicked: boolean = true;
  constructor(){}
  

  navIconChange() {
    if (this.navClicked) {
      this.navClicked = false;
    } else {
      this.navClicked = true;
    }
  }
}
