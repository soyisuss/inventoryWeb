import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';

@Component({
  selector: 'app-categoria-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-forms.component.html',
  styleUrl: './categoria-forms.component.css'
})
export class CategoriaFormsComponent {
  titulo: string = 'Categoria Formulario';
  Categoria: Categoria = new Categoria();

  constructor(private categoriaService : CategoriaService, private router : Router, private rutaActiva : ActivatedRoute) {}

  ngOnInit(): void {
    this.mostrarCategoria();
  }

  mostrarCategoria(): void {
    this.rutaActiva.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.categoriaService.mostrarCategoria(id).subscribe((data) => this.Categoria = data);
      }
    });
  }

  registrarCategoria(): void {
    this.categoriaService.crearCategoria(this.Categoria).subscribe((response) => this.router.navigate(['/categorias']));
    Swal.fire('Nueva Categoria', `Categoria ${this.Categoria.nombreCategoria} creada con exito`, 'success');
  }

  actualizarCategoria(): void {
    Swal.fire('actualizado'); 
  }


}

