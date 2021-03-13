import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {NewProductComponent} from "./new-product/new-product.component";
import {SalesComponent} from "./sales/sales.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'sales', component: SalesComponent }

];

export const appRoutingModule = RouterModule.forRoot(routes);
