import { provideRouter, RouterConfig } from '@angular/router';
import { ProductListComponent, ProductEditComponent } from "./product";

const routes: RouterConfig = [
    { path: '', redirectTo: 'products' },
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductEditComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];