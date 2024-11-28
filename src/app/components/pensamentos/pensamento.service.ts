import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<Pensamento[]> {

    const itensPorPagina = 6;
    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina);

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }
    // return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);
    return this.http.get<Pensamento[]>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.API}/${id}`);
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.patch<Pensamento>(`${this.API}/${pensamento.id}`, { favorito: !pensamento.favorito });
  }
}
