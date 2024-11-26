import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Tester',
    autoria: 'teste',
    modelo: 'modelo3'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
