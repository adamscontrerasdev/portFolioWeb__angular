import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'header',
  template: `<div class="container__padre">
  <div class="header__container">
    <div class="header__title">
      <h1>AdamsDev</h1>
      <h2 class="header__title--sombra">AdamsDev</h2>
    </div>
    <a href="#educacion">Educacion</a>
  </div>
</div>`,
  styleUrls: ['./header.component.css']


})
export class HeaderComponent {
  // Método para manejar el evento de scroll en el elemento anfitrión
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Realiza alguna acción cuando ocurre el evento de scroll
    console.log('Se hizo scroll', event);
  }




  ngAfterViewInit(){
  }

  ngOnInit():void{
  }
}
