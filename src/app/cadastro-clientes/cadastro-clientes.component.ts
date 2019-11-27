import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
myDate = Date.now();

  formCadastro;
  // tslint:disable-next-line: ban-types
  valoresForm: Object;
  conversao;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {

    localStorage.clear();
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: [''],
      dataNascimento: [''],
    });
    this.formCadastro.valueChanges.pipe()
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);

    // verificar modal aqui
    this.verificaCadastro();
  }

  verificaCadastro() {
    setTimeout(() => {
      if (localStorage.getItem('cadastro')) {
        // REDIRECIIONAR PARA PAGINA DE CADASTRO CONCLUIDO
        this.router.navigate(['cadastro-concluido']);
      } else {
        return false;
      }
    }, 200);
  }
}
