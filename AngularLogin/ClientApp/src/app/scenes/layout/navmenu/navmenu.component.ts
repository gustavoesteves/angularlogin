import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  show: boolean;

  constructor(
    private accountService: AuthService,
    private router: Router) {
    this.accountService._logged.subscribe(result => {
      this.show = result;
    });
    this.accountService._username.subscribe(result => {
      this.username = result;
    });
  }

  ngOnInit() { }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  userLogout(): void {
    this.accountService.postLogOut().subscribe((logout: IError | any) => {
      if (logout === null) {
        this.accountService.setUsername('');
        this.accountService.setLogged(false);
        this.router.navigate(['/Home']);
      }
    });
  }
}
