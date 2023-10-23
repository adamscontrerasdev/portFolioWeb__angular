import { Component } from '@angular/core';
import { ProyectosService } from 'src/app/proyectos.service';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  datas: any;
  constructor(private servicio: ProyectosService) { }

  ngOnInit() {
    this.servicio.getData().subscribe((response) => {
      this.datas = response;
      console.log(this.datas);

    });
  }
  verPagina(id: number) {
    let peliPorId = this.datas.filter((pelicula) => {
      return pelicula.id === id;
    });
    window.open(peliPorId[0].url, '_blank');
    
  } 

}
