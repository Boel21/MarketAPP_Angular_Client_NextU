import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private httpservice: HttpService, private router: Router) { }
  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get f() { return this.miFormulario.controls; }

  onSubmit(user, password) { this.submitted = true;
                             if (this.miFormulario.invalid) {
                                return;
                               } else {
                                   this.login(user, password);
                                }
    }
      login(user: any, password: any) {
        return this.httpservice.verifyUser({user}, {password})
        .subscribe(data => {
          if (data === 'Validado' ) {
            this.router.navigate(['main']);
          } else {
            alert(data);
          }
        });
      }

}
