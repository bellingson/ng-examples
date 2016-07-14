import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';


import {Product} from "./product.model";
import {ProductService} from "./product.service";
import {ProductAddComponent} from "./product-add.component";

@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'], 
   directives: [ ROUTER_DIRECTIVES, ProductAddComponent ]
})
export class ProductListComponent implements OnInit {

   products: Array<Product>;

   constructor(private productService: ProductService) {}

   ngOnInit() {
       this.fetchProducts();
   }

    fetchProducts() {
        this.productService.query()
            .subscribe(products => this.products = products );
    }

    addProduct(value) {
        
        this.productService.save(value)
            .subscribe(r => {
                this.fetchProducts();
            });
    }

    


}
