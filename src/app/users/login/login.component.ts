import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { MzToastService} from 'ngx-materialize';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _tokenService: Angular2TokenService,
    private toastService: MzToastService,
    private router: Router
  ) { }

  public _signInData: SignInData = <SignInData>{};

  ngOnInit() {
  }

  onSubmit() {
    this._tokenService.signIn(this._signInData).subscribe(
      res => {
        this.router.navigate(['/employees']);
      }, error => {
        this._signInData = <SignInData>{};
        console.log(error._body);
        if ( error.status !== 0 ) {
          for (const message of JSON.parse(error._body)['errors']) {
            this.toastService.show(message, 8000, 'red');
          }
        } else {
          this.toastService.show('Connection Error', 8000, 'red');
        }
      }
    );
  }
}
