import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  anchoDeVentana: any;
  positionOfScrollY: any;
  yaBajo:boolean = false;

  ngOnInit(): void {
    this.obtenerAncho()
    this.positionOfScrollY = window.scrollY;
    console.log(this.positionOfScrollY);
    
  }

  @HostListener('window:scroll')
  onScroll() {
    this.positionOfScrollY = window.scrollY;
  }


  obtenerAncho() {
    this.anchoDeVentana = document.documentElement.clientWidth;
    console.log(`El ancho de la ventana es: ${this.anchoDeVentana}px`);
  }

  enfoque(clase: String, parrafo: boolean) {
    let element = document.querySelector("." + clase);
    if (element?.classList.contains("box__right--bottom")) {
      element?.classList.toggle("enfocadoMayor");
      if (this.anchoDeVentana <= 500 && !this.yaBajo) {
        window.scrollBy(0, 200);
        this.yaBajo = true;
      }
    } else {
      element?.classList.toggle("enfocado");
    }
    /*-----------------------------------------------------------------*/
    if (element) {
      const hijos = element.children;
      console.log(hijos);
      if (hijos.length >= 2) {
        console.log(hijos[1]);
        hijos[1].classList.toggle("oculto")
      }
    }
  }

}
