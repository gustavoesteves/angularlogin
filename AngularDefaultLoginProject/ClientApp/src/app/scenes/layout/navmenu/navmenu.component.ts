import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../account/auth.service';
import { IError } from '../../../global/handleError';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  collapsed = true;
  username: string;
  show = true;

  constructor(private accountService: AuthService) { }

  ngOnInit() {
    this.accountService._username.subscribe(value => {
      if (value !== '') {
        this.username = value;
        this.logout();
      }
    });
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  logout(): void {
    this.show = !this.show;
  }

  userLogout(): void {
    this.accountService.postLogOut().subscribe((logout: IError | any) => {
      if (logout === null) {
        this.accountService.setUsername('');
        this.logout();
      }
    });
  }
}
