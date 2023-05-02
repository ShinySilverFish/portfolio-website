import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeLink = 0;

  setActiveLink(linkIndex: number) {
    this.activeLink = linkIndex;
  }
}
