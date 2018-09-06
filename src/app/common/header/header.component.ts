import { Component, OnInit, HostListener } from '@angular/core';
import { TweenLite, TweenMax, Power1 } from "gsap";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;
  
  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
  }

  ngOnInit() {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);

    let logo = document.getElementById("logo");
    TweenLite.to(logo, 1.5, { delay: .5, y: 50 });
    let navEffect = document.getElementById("nav-effect");
    TweenLite.to(navEffect, 1.5, { delay: .5, y: 35 });
  }

  openNav() {
    if (this.innerWidth < 800) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("main").style.marginRight = "0";
    } else {
      document.getElementById("mySidenav").style.width = "50.50%";
      document.getElementById("main").style.marginRight = "0";
    }
    // document.body.style.backgroundColor = "#333";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    // document.body.style.backgroundColor = "white";
  }



}
