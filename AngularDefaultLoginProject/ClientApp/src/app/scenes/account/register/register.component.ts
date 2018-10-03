import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { User, IUserLogin, IToken } from '../user';
import { IError } from '../../../global/handleError';
import { MessageService } from '../../../message/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AuthService,
    private router: Router,
    private message: MessageService) {
    this.message.clear();
  }

  ngOnInit() { }

  registerUser(username: string, email: string, password: string, confirmPassword: string): void {
    this.accountService.registerUser({ username, email, password, confirmPassword } as User)
      .subscribe((_user: IError | any) => {
        if (_user === null) {
          this.accountService.getToken({ email: username, password: password } as IUserLogin)
            .subscribe((token: IToken | IError | any) => {
              // localStorage.setItem('token', token.access_token);
              // localStorage.setItem('user', username);
              this.router.navigate(['']);
            });
        } else {
          this.message.clear();
          this.message.add(_user.error);
        }
      });
  }

}
