import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {Router} from '@angular/router';
import { FilterPipe } from '../../pipes/filter.pipe';
import { EnlaceService} from '../../enlace.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HttpService, FilterPipe]
})
export class MainComponent implements OnInit {
  message: string;
  findProducts: new() => 'object';
  aux: string;

  constructor( private httpservice: HttpService,
               private router: Router,
               private enlaceService: EnlaceService) { }

  ngOnInit() {
    this.enlaceService.customMessage.subscribe(msg => this.message = msg);
  }

 changeMessage(event) {
   return this.enlaceService.changeMessage(event);
  }

}
