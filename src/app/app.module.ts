import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { MainComponent } from '../app/components/main/main.component';
import { LoginComponent } from '../app/components/login/login.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';

import { FilterPipe } from './pipes/filter.pipe';
import { EnlaceService } from '../app/enlace.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { L3RoutingModule } from './app-routing.module';
import { HelpShopcarService } from './help-shopcar.service';
import { HelperService } from './helper.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavbarComponent,
    ProductsCardsComponent,
    FilterPipe,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    L3RoutingModule
  ],
  providers: [HttpService, EnlaceService, HelpShopcarService, HelperService, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
