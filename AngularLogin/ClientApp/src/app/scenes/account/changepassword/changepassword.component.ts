import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IChangePassword } from '../user';
import { AuthService } from '../auth.service';
import { MessageService } from '../../../message/message.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private accountService: AuthService,
    private message: MessageService,
    private router: Router) {
    this.message.clear();
  }

  ngOnInit() {
  }

  changePassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    this.accountService.changePassword({
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    } as IChangePassword)
      .subscribe((result: any) => {
        if (result != null) {
          this.message.clear();
          this.message.add(result.error);
        } else {
          this.router.navigate(['']);
        }
      });
  }

}
