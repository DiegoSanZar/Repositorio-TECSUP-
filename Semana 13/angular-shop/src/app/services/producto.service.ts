import { Injectable } from '@angular/core';
// HttpClient es la herramienta que me permite hacer peticiones de angular 
import { HttpClient } from '@angular/common/http';
// Observable es la manera que voy a enviar el resultado de mis peticiones 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string ="https://609f10615f32be00171cd347.mockapi.io/Productos"
//inyeccion por dependencias, es como si yo añadiera una propiedad con el tipo de inyeccion dentro de mi clase 
  constructor(private _Http:HttpClient) { }

  obtenerProductos():Observable<any>{
    return this._Http.get(this.url)
  }
  
  crearProducto(nuevoProducto:any):Observable<any>{
    return this._Http.post( this.url, nuevoProducto)
  }
}

