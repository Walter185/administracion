import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
