import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { EnlaceService } from '../../enlace.service';
import { HelperService } from '../../helper.service';
import { HelpShopcarService } from '../../help-shopcar.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css'],
})

export class ProductsCardsComponent implements OnInit {
  products: any;
  ProductSelected = [];
  message: string;
  parameter: any;
  ver = false;
  verMasdata: any;

  constructor(private enlaceService: EnlaceService,
              private httpservice: HttpService,
              private helperService: HelperService,
              private navbarComponent: NavbarComponent,
              private helpShopcarService: HelpShopcarService) {
      this.httpservice.getData().subscribe( data => {
      this.products = data;
    });
  }

  ngOnInit() {
    this.enlaceService.customMessage.subscribe(msg => this.message = msg),
    this.helperService.customMessage.subscribe(param => this.parameter = param);
    this.helpShopcarService.customMessage.subscribe(quantity => this.ProductSelected = quantity);
  }

  verMas(product) {
    this.verMasdata = product;
    this.ver = true;
    return this.verMasdata;
  }

  atras() {
    this.ver = false;
    return this.ver;
  }

  addToCar(cantidad, product) {
    alert(product.nombre + ' Agregado al Carrito');
    product.cant_dispo -= cantidad;
    product.cant_sell = cantidad;
    product.subTotal = cantidad * product.precio;
    this.parameter.push(product);
    this.ProductSelected.push(product);
    this.helpShopcarService.setCar(this.ProductSelected);
    this.helperService.addToCar(this.parameter);
    this.navbarComponent.ngOnInit();
   }

}
