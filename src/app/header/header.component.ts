import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {
// @HostListener('window:scroll', ['$event'])
constructor() { }
headerElement!:any

  ngOnInit(): void {
    this.headerElement = document.querySelector(".header__container");
  }



}

