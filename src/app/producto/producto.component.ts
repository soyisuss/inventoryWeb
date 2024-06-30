import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Articulo } from '../model/producto';
import { ProductoService } from './../service/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  titulo: string="Lista de Productos";

  listaDeProductos: Articulo[] = [];

  constructor(private productoService : ProductoService){}

    HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.productoService.mostrarArticulos().subscribe((data)=> {this.listaDeProductos = data;});
  }

  
  delete(producto : Articulo): void{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminarArticulo(producto.idArticulo).subscribe((response) => this.productoService.mostrarArticulos().subscribe((lasproductos) => this.listaDeProductos = lasproductos));
        Swal.fire({
          title: "Deleted!",
          text: `Your file ${producto.nombreArticulo} has been deleted.`,
          icon: "success"
        });
      }
    });
}
}
