import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"product",
        component:ProductsComponent
    },
    {
        path:"about us",
        component:AboutUsComponent
    }
];
