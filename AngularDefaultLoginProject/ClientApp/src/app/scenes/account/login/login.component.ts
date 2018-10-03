import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { IUserLogin, IToken } from '../user';
import { IError } from '../../../global/handleError';
import { MessageService } from '../../../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AuthService,
    private router: Router,
    private message: MessageService) {
    this.message.clear();
  }

  ngOnInit() { }

  loginUser(username: string, password: string) {
    this.accountService.getToken({ email: username, password: password } as IUserLogin)
      .subscribe((token: IError | any) => {
        if (token != null) {
          this.message.clear();
          this.message.add(token.error);
        } else {
          this.accountService.setUsername(username);
          this.accountService.setLogged(true);
          this.router.navigate(['']);
        }
        /*
        if (token.access_token !== '' && token.status !== 400) {
          localStorage.setItem('token', token.access_token);
          localStorage.setItem('user', username);
          this.router.navigate(['']);
        } else {
          this.message.clear();
          this.message.add(token.error.error_description);
        }
        */
      });
  }
}
