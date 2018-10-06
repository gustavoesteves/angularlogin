import { HttpHeaders } from '@angular/common/http';

export const HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};

// Developer
const deployUrl = 'https://localhost:44364/';

// IIS Deploy
// const deployUrl = 'http://www.defaultidentityapi.code/';

// Account
const accountApi = 'api/Account/';
export const LoginUrl = deployUrl + accountApi + 'Login';
export const LogoutUrl = deployUrl + accountApi + 'Logout';
export const RegisterUrl = deployUrl + accountApi + 'Register';

// Manage
const manageApi = 'api/Manage/';
export const ValidateCookieUrl = deployUrl + manageApi + 'ValidateCookie';
export const ChangePassUrl = deployUrl + manageApi + 'ChangePassword';
