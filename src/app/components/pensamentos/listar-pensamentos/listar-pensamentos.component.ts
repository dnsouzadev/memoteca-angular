import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true, // Adicione isto para marcar o componente como standalone
  imports: [RouterModule, PensamentoComponent, HttpClientModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe(pensamentos => this.listaPensamentos = pensamentos);
  }
}
