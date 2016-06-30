import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  moduleId: module.id,
  selector: 'app-product-edit',
  templateUrl: 'product-edit.component.html',
  styleUrls: ['product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit() {

      this.sub = this.route.params.subscribe( params => {
          let id = +params['id'];
          this.productService.get(id)
              .subscribe(product => this.product = product);

      })
  }

   update() {

       this.productService.save(this.product)
           .subscribe(r => {
               this.router.navigateByUrl('')
                   .then(() => {
                       console.log('updated product');
                   });
           });


   }

    delete() {

        if(!confirm(`Are you sure you want to delete: ${ this.product.name}`))
            return;

        this.productService.delete(this.product)
            .subscribe(r => {
                this.router.navigateByUrl('')
                    .then(() => {
                        console.log('deleted product');
                    });
            });
    }

}
