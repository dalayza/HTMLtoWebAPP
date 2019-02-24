import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interface';


@Injectable({
  providedIn: 'root'
})


export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
    // console.log('Servicio de infoPagina listo!');

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
   }

   private cargarEquipo() {
    // console.log('Servicio de infoPagina listo!');

    // Leer el archivo JSON
    this.http.get('https://angular-html-a76ed.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.equipo = resp;
        console.log(resp);
      });
   }
}
