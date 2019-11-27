import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  getCadastro;
  message;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ['']
    });
  }
  onlynumber(evt) {
    // tslint:disable-next-line: deprecation
    this.theEvent = evt || window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
  login() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    const cpfPersistido = this.getCadastro.cpf;
    const cpfDigitado = this.formLogin.get('cpf').value;
    if (cpfPersistido === cpfDigitado) {
      this.router.navigate(['conta']);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
