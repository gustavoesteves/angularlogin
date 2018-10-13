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
  username: string;
  show: boolean;
  active = '';
  activeMenu = false;

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

  userLogout(): void {
    this.accountService.postLogOut().subscribe((logout: IError | any) => {
      if (logout === null) {
        this.accountService.setUsername('');
        this.accountService.setLogged(false);
        this.router.navigate(['/Home']);
      }
    });
  }

  menuControl() {
    this.activeMenu = !this.activeMenu;
    this.active = this.activeMenu ? 'active' : '';
  }

}
