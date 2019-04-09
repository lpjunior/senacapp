import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// Constantes
const URL_SERVICE = 'http://localhost:3000/usuarios';
const HTTP_HEADER ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  listUsuariosService():Observable<any> {
    return this.http.get<any>(URL_SERVICE, HTTP_HEADER).pipe(
      tap(_ => console.log('Listando os usuários..')),
      catchError(this.handleError<any>(`Falha no listar os usuários`))
    );
  }
  
  getUsuariosService(id) {
    return this.http.get<any>(`${URL_SERVICE}/${id}`, HTTP_HEADER).pipe(
      tap(_ => console.log('Localizando o usuário..')),
      catchError(this.handleError<any>(`Falha no localizar o usuário`))
    );
  }
  
  insereUsuariosService(usuario) {
    return this.http.post<any>(`${URL_SERVICE}`, HTTP_HEADER, usuario).pipe(
      tap(_ => console.log('Inserindo o usuário..')),
      catchError(this.handleError<any>(`Falha no inserir o usuário`))
    );
  }

  updateUsuariosService(usuario) {
    return this.http.put<any>(`${URL_SERVICE}`, HTTP_HEADER, usuario).pipe(
      tap(_ => console.log('Atualizando o usuário..')),
      catchError(this.handleError<any>(`Falha no atualizar o usuário`))
    );
  }
  
  deleteUsuariosService(id) {
    return this.http.delete<any>(`${URL_SERVICE}/${id}`, HTTP_HEADER).pipe(
      tap(_ => console.log('Excluind o usuário..')),
      catchError(this.handleError<any>(`Falha no excluir o usuário`))
    );
  }
  
  // método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T) {
    return (error: any):Observable<T> => {
      console.error(error); // log do erro na console

      // mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}
