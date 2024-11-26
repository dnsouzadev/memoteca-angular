import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamentos',
  imports: [RouterModule, PensamentoComponent],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: 'tester',
      autoria: 'teste',
      modelo: 'modelo3'
    },
    {
      conteudo: 'oioio',
      autoria: 'fdfdf',
      modelo: 'modelo1'
    }
  ];
}
