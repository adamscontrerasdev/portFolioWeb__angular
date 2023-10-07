import { Component } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent{


  enfoque(clase: String, parrafo:boolean) {
    let element = document.querySelector("." + clase);
    element?.classList.toggle("enfocado");
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
