import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos(): void {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }

  listarFavoritos(): void {
    this.favoritos = true;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(pensamentos => {
      this.listaPensamentos = pensamentos
      this.listaFavoritos = pensamentos
    });
  }

  recarregarComponente(): void {
    this.favoritos = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

}
