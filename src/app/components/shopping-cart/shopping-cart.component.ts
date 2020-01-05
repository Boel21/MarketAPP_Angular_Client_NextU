import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../../http.service';
import { HelperService } from 'src/app/helper.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { HelpShopcarService } from '../../help-shopcar.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  parameter: any = {};
  param: any = [];
  productSelected = [] ;
  element: any;
  varly = 0.0;
  totaly: any = 0.0;
  ProductSelected = [];

  constructor(private httpservice: HttpService,
              private router: Router,
              private helperService: HelperService,
              private navbarComponent: NavbarComponent,
              private helpShopcarService: HelpShopcarService) { }

  ngOnInit() {
   this.helperService.customMessage.subscribe(param => this.parameter = param);
   this.helpShopcarService.customMessage.subscribe(quantity => this.ProductSelected = quantity);
   this.saveShop();
  }
  saveShop() {
      for (const key in this.parameter) {
        if (this.parameter.hasOwnProperty(key)) {
          this.element = this.parameter[key].subTotal;
          this.varly += this.element ;
          this.totaly = this.varly.toFixed(2);
        }
    }
      this.productSelected = this.parameter;
      return this.productSelected;
  }

  borrarCompra() {
    this.productSelected = [];
    this.ProductSelected = [];
    this.totaly = 0.0;
    this.varly = 0.0;
    this.helperService.deleteCar(this.parameter);
    this.helpShopcarService.resetCar(this.ProductSelected);
    this.navbarComponent.ngOnInit();
    this.router.navigate(['main']);
  }

  pagar() {
    return this.httpservice.updateProducts(this.productSelected)
    .subscribe(data => {
      if (data === 'done' ) {
        this.borrarCompra();
        alert('Compra Exitosa');
        this.router.navigate(['main']);
      } else {
        alert(data);
      }
    });
  }

}
