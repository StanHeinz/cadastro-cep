
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable()
export class AuthGuard implements CanActivate {
// tslint:disable-next-line: variable-name
base_url: string;
constructor(
private authService: AuthService,
private router: Router) { }
canActivate() {
// Verifica se existe Token
if (this.authService.isAuthenticated()) {
// Caso exista token retorna true
return true;
   }
  }
}
