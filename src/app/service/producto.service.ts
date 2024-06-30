import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Articulo } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlendpoint: string = 'http://localhost:8082/api/v1/articulo';
  private HttpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  mostrarArticulos () : Observable<Articulo[]> {
    return this.http
      .get(this.urlendpoint)
      .pipe(map((response) => response as Articulo[]));
  }

  mostrarArticulo (id : number) : Observable<Articulo>{
    return this.http.get<Articulo>(`${this.urlendpoint}/${id}`);
  }

  crearArticulo (Articulo : Articulo) : Observable<Articulo>{
    return this.http.post<Articulo>(this.urlendpoint, Articulo, {headers: this.HttpHeaders});
  }

  eliminarArticulo (id : number) : Observable<Articulo>{
    return this.http.delete<Articulo>(`${this.urlendpoint}/${id}`, {headers: this.HttpHeaders});
  }

  actualizarArticulo (Articulo : Articulo) : Observable<Articulo>{
    return this.http.put<Articulo>(`${this.urlendpoint}/${Articulo.idArticulo}`, Articulo, {headers: this.HttpHeaders});
  }
}
