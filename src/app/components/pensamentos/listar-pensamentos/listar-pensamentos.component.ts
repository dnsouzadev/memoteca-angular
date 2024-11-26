import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamentos',
  imports: [RouterModule, PensamentoComponent],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento[] = [];
}
