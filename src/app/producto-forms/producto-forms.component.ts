import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Articulo } from '../model/producto';
import { CategoriaService } from '../service/categoria.service';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-forms',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './producto-forms.component.html',
  styleUrls: ['./producto-forms.component.css']
})
export class ProductoFormsComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private productoService = inject(ProductoService);
  private route = inject(ActivatedRoute);
  private categoriaService = inject(CategoriaService);
  
  form?: FormGroup;
  producto?: Articulo;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productoService.mostrarArticulo(parseInt(id))
        .subscribe(producto => {
          this.producto = producto;
          this.form = this.fb.group({
            idArticulo: [producto.idArticulo],
            nombreArticulo: [producto.nombreArticulo, Validators.required],
            descripcionArticulo: [producto.descripcionArticulo, Validators.required],
            precioArticulo: [producto.precioArticulo, Validators.required],
            stockArticulo: [producto.stockArticulo, Validators.required],
            idCategoria: [producto.categoriaDTO.idCategoria, Validators.required]
          });
        });
    } else {
      this.form = this.fb.group({
        nombreArticulo: ['', Validators.required],
        descripcionArticulo: ['', Validators.required],
        precioArticulo: ['', Validators.required],
        stockArticulo: ['', Validators.required],
        idCategoria: ['', Validators.required]
      });
    }
  }

  save() {
    const formValues = this.form!.value;
    const categoria: Categoria = { idCategoria: formValues.idCategoria, nombreCategoria: '', descripcionCategoria: '' };
    const productoForm: Articulo = {
      ...formValues,
      categoriaDTO: categoria
    };

    if (this.producto) {
      this.productoService.actualizarArticulo(productoForm).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productoService.crearArticulo(productoForm).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}
