import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  constructor(
    private pensamentoService: PensamentoService
  ) { }

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Tester',
    autoria: 'teste',
    modelo: 'modelo3',
    favorito: false
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito) {
      return 'ativo'
    }
    return 'inativo'
  }

  atualizarFavorito(): void {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe();
  }
}
