import { Component, OnInit } from '@angular/core';
import { HelpShopcarService } from '../../help-shopcar.service';
import { async } from '@angular/core/testing';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  productsSelected = [];

  constructor(private helpShopcarService: HelpShopcarService ) {
  }

   ngOnInit() {
    this.helpShopcarService.customMessage.subscribe(quantity => this.productsSelected = quantity);
    this.getCounter();
    }

   getCounter() {
      this.productsSelected = this.helpShopcarService.getCounter();
    }

}
