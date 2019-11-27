

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LoginComponent } from './login/login.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { CommonModule } from '@angular/common';
import { CepComponent } from './cep/cep.component';
import { AuthGuard } from './AuthGuard';
import { ContaComponent } from './conta/conta.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'conta', component: ContaComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'cep', component: CepComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
