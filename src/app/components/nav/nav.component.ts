import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  title = 'showtown';
  navbg: any;
  @HostListener('document:scroll') scrollover() {



    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

      this.navbg = {
        'background-color': '#000000'
      }

    } else {
      this.navbg = {

      }
    }
  }
}
