import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from "./product.model";

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'product-add',
  templateUrl: 'product-add.component.html',
  styleUrls: ['product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Output() newProduct = new EventEmitter<Product>();
  @Input() taxRate: number;
    
  constructor() {}

  ngOnInit() {
   }
    
   addProduct(product: Product) {
       
       this.newProduct.emit(product);

       jQuery("#modal").find('input').val('');
       jQuery("#modal").modal('hide');
   }

}