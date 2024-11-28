import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { BotaoCarregarMaisComponent } from "./botao-carregar-mais/botao-carregar-mais.component";

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true, // Adicione isto para marcar o componente como standalone
  imports: [RouterModule, PensamentoComponent, HttpClientModule, BotaoCarregarMaisComponent, FormsModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos(): void {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }
}
