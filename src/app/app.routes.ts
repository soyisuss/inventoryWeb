import { Routes } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { CategoriaFormsComponent } from './categoria-forms/categoria-forms.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ProductoFormsComponent } from './producto-forms/producto-forms.component';
import { ProductoComponent } from './producto/producto.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'actividades', component:ActividadesComponent},
    {path: 'categorias', component:CategoriaComponent},
    {path: 'categoriaForms', component:CategoriaFormsComponent},
    {path: 'categoriaForms/:id', component:CategoriaFormsComponent},
    {path: 'producto', component:ProductoComponent},
    {path: 'productoForms', component:ProductoFormsComponent},
    {path: 'productoForms/:id', component:ProductoFormsComponent}
];
