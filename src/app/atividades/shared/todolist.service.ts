import {
  AtividadeCreate as AtividadeCreate,
  AtividadeUpdate,
} from './../../atividade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs';
import { Atividade } from '../../atividade';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private readonly API = 'http://localhost:3001/todolist/';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http
      .get<Atividade[]>(this.API)
      .pipe
      // delay(1000),
      // tap(console.log)
      ();
  }

  listarId(id: number) {
    return this.http.get(`${this.API}${id}`).pipe(take(1));
  }

  create(atividade: AtividadeCreate) {
    return this.http.post<Atividade>(this.API, atividade).pipe(take(1));
  }

  update(id: number, atividade: AtividadeUpdate) {
    return this.http
      .post<Atividade>(`http://localhost:3001/ToDoList/${id}`, atividade)
      .pipe(take(1));
  }

  remove(id: number) {
    return this.http
      .delete<Atividade[]>(`http://localhost:3001/ToDoList/${id}`)
      .pipe(take(1));
  }
}
