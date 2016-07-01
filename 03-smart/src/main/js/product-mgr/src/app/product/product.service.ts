import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Product} from "./product";


declare var csrfToken: string;

@Injectable()
export class ProductService {

    urlBase: string = '/data/admin/product';

    headers = new Headers();


    constructor(private http: Http) {
        this.headers.append('Content-Type','application/json');
    }

    query() : Observable<Array<Product>> {
        return this.http.get(this.urlBase).map(r => r.json());
    }

    get(id: number) : Observable<Product> {
        return this.http.get(this.urlBase + '/' + id).map(r => r.json());
    }

    save(product: Product) : Observable<any> {

        let body = JSON.stringify(product);

        let url = this.urlBase;
        if(product.id) {
            url += '/' + product.id;
        }

        url += '?_csrf='  + csrfToken;

        if(product.id) {
            return this.http.put(url, body, { headers: this.headers }).map(r => r.json());
        }
        else {
            return this.http.post(url, body, { headers: this.headers }).map(r => r.json());
        }
    }

    delete(product: Product) : Observable<any> {

        let url = this.urlBase + '/' + product.id;

        url += '?_csrf='  + csrfToken;
        
        return this.http.delete(url).map(r => r.json());
    }


}
