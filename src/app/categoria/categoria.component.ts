import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  titulo: string = 'Lista de Categorias';

  listaCategorias: Categoria[] = [];

  constructor (private categoriaService : CategoriaService) {}
    HttpClient = inject(HttpClient);

/*
    {
      idCategoria : 1,
      nombreCategoria : 'Categoria 1',
      descripcionCategoria : 'Descripcion de la categoria 1'
    },
    {
      idCategoria : 2,
      nombreCategoria : 'Categoria 2',
      descripcionCategoria : 'Descripcion de la categoria 2'
    },*/

  ngOnInit(): void {
    this.categoriaService.mostrarCategorias().subscribe((data) => {
      this.listaCategorias = data;
    });
  }

  delete(categoria : Categoria): void{
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
        this.categoriaService.eliminarCategoria(categoria.idCategoria).subscribe((response) => this.categoriaService.mostrarCategorias().subscribe((lasCategorias) => this.listaCategorias = lasCategorias));
        Swal.fire({
          title: "Deleted!",
          text: `Your file ${categoria.nombreCategoria} has been deleted.`,
          icon: "success"
        });
      }
    });
}
}
