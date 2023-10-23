import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('./../assets/data__proyectos.json');
  }
}

// ./../assets/data__proyectos.json