import { Categoria } from "./Categoria";

export class Articulo{
    idArticulo: number=0;
    nombreArticulo: string='';
    descripcionArticulo: string='';
    stockArticulo: number=0;
    precioArticulo: number=0;
    categoriaDTO: Categoria = new Categoria;
}