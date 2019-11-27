
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Cep } from './cep';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  buscar(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
             // tslint:disable-next-line: align
             .toPromise()
             .then(response => this.converterRespostaParaCep(response));
  }

  private converterRespostaParaCep(cepNaResposta): Cep {
    // tslint:disable-next-line: prefer-const
    let cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.cidade = cepNaResposta.localidade;
    cep.estado = cepNaResposta.uf;
    return cep;
  }
}