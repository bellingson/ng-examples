import { provideRouter, RouterConfig } from '@angular/router';
import { ProductListComponent, ProductEditComponent } from "./product";

const routes: RouterConfig = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductEditComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];