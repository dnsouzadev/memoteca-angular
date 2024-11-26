import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { CriarPensamentoComponent } from "./components/pensamentos/criar-pensamento/criar-pensamento.component";
import { ListarPensamentosComponent } from "./components/pensamentos/listar-pensamentos/listar-pensamentos.component";
import { RodapeComponent } from "./components/rodape/rodape.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, ListarPensamentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}
