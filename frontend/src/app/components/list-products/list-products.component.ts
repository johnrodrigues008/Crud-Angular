import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {   id: 1, name: 'Coca cola', description: 'Refrigerante com muito açucar', price: 22.50,stock: 500 },
    {   id: 2, name: 'Wopper duplo', description: 'Hamburguer duplo com queijo, cebola, 2 carnes e salada', price: 38.90,stock: 10 },
    {   id: 3, name: 'Batata frita', description: 'Batata fritas saborosas', price: 13.40 ,stock: 10 },
  ]
}
