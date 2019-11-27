import { CepService } from './cep.service';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { AuthGuard } from './AuthGuard';
import { AuthService } from './AuthService';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ContaComponent } from './conta/conta.component';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    CadastroConcluidoComponent,
    LoginComponent,
    ModalComponent,
    ContaComponent,
    HomeComponent,
    CepComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FormsModule,

  ],
  providers: [AuthGuard, AuthService, CepService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
