import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms/';
import { ShoppingCartComponent } from '../app/components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';


const routes: Routes = [
      { path: '', component: LoginComponent},
      { path: 'main', component: MainComponent},
      { path: 'shoppingCart', component: ShoppingCartComponent},
      {path:  'navbar', component: NavbarComponent }
  ];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class  L3RoutingModule { }
