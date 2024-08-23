import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navClicked:boolean = true
  navIconChange(){
    if(this.navClicked){

      this.navClicked = false
    }
    else{
      this.navClicked = true
    }
  }
}
