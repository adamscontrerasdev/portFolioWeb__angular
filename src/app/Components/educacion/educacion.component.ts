import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements AfterViewInit {
  position: number;
  cargado: Boolean = false;
  padre: any;
  /*-------------------------------------------*/
  @ViewChild('educacion', { static: false }) miComponenteRef: ElementRef;


  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onEdecacion(event: Event): void {
    let padre = document.getElementById("educacion");
    /*-----------------------------------------------------------------*/
    this.position = window.scrollY;
    /*----------------------------------------*/
    if (this.position >= 1100 && !this.cargado) {
      // document.documentElement.style.overflow = 'hidden';
      this.animarTodos();
      console.log(this.padre);

      setTimeout(() => {
        document.documentElement.style.overflow = 'auto';
        this.cargado = true
        padre.classList.remove("red")
        console.log(this.cargado);
      }, 1000);
    }
  }
  ngAfterViewInit() {
    const elemento = this.miComponenteRef.nativeElement;
    const posicionY = elemento.getBoundingClientRect().top + window.scrollY;

    // console.log('Posición Y del componente:', posicionY);
  }
  animarTodos(): void {
    let autodidacta = document.querySelector(".autodidacta");
    let argentinaPrograma = document.querySelector(".argentina--programa");
    let certificado = document.querySelector(".certificados");

    autodidacta.classList.add(autodidacta.classList.value+"__animation");
    argentinaPrograma.classList.add(argentinaPrograma.classList.value+"__animation");
    certificado.classList.add(certificado.classList.value+"__animation");
    
  }

}
