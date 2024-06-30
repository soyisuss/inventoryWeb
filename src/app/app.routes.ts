import { Routes } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { CategoriaFormsComponent } from './categoria-forms/categoria-forms.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'actividades', component:ActividadesComponent},
    {path: 'conversiones', component:ConversionComponent},
    {path: 'categorias', component:CategoriaComponent},
    {path: 'categoriaForms', component:CategoriaFormsComponent},
    {path: 'categoriaForms/:id', component:CategoriaFormsComponent},
];
