import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-forms',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './categoria-forms.component.html',
  styleUrl: './categoria-forms.component.css'
})
export class CategoriaFormsComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private categoriaService = inject(CategoriaService);
  private route = inject(ActivatedRoute)
  
  form?: FormGroup;
  categoria?: Categoria;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      
    this.categoriaService.mostrarCategoria(parseInt(id))
      .subscribe(categoria => {
        this.categoria = categoria;
        this.form = this.fb.group({
          idCategoria: [parseInt(id)],
          nombreCategoria: [categoria.nombreCategoria, Validators.required],
          descripcionCategoria: [categoria.descripcionCategoria, Validators.required]
        });
      });
    } else {
      this.form = this.fb.group({
        nombreCategoria: ['', Validators.required],
        descripcionCategoria: ['', Validators.required]
      });
    }

  }
  
  

  save(){

    const categoriaForm = this.form!.value as unknown as Categoria; 

    if(this.categoria){
      this.categoriaService.actualizarCategoria(categoriaForm).subscribe(() => {this.router.navigate(['/categorias']);});
    } else {
      this.categoriaService.crearCategoria(categoriaForm).subscribe(() => {this.router.navigate(['/categorias']);});
    }
    
  }
}

