import { AfterViewInit, Component, ElementRef } from '@angular/core';
// import title from "./../../app.component";

import { AppComponent } from 'src/app/app.component';



@Component({
  selector: 'caja-divisora',
  templateUrl: './caja-divisora.component.html',
  styleUrls: ['./caja-divisora.component.css']
})


export class CajaDivisoraComponent implements AfterViewInit {
  constructor(private metodosTitle: AppComponent, private elementRef: ElementRef) { }


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  apagar():void{
    let flama = document.querySelectorAll(".flame");
    let circulo = document.querySelectorAll(".circle");
    let padre = document.querySelector(".contenedor");

    flama.forEach(e => {
      e.classList.toggle("apagar");
    });

    circulo.forEach(element => {
      element.classList.toggle("apagar");
    });

    padre?.classList.toggle("oscurecer");
  }
}
