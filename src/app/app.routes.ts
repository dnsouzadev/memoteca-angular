import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

export const routes: Routes = [
    {path: 'criarPensamento', component: CriarPensamentoComponent},
    {path: 'listarPensamento', component: ListarPensamentosComponent},
    {path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent},
    {path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent},
    {path: '', redirectTo: 'listarPensamento', pathMatch: 'full'}
];
