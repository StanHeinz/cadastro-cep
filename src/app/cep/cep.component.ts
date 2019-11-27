import { CepService } from './../cep.service';
import {Cep } from './../cep';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

    cep = new Cep();
    isLoading = false;
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }
  buscar() {
    this.isLoading = true;
    this.cepService.buscar(this.cep.cep)
    // tslint:disable-next-line: align
          .then((cep: Cep) => {
            this.isLoading = false;
            this.cep = cep;
        })

          .catch(() => {
            // tslint:disable-next-line: prefer-const
            this.isLoading = false;
            // tslint:disable-next-line: prefer-const
            let cep = this.cep.cep;
            this.cep = new Cep();
            this.cep.cep = cep;
            alert('Não foi possivel continuar a busca');
          });
  }
}
