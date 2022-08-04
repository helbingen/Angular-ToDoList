import {
  AtividadeCreate as AtividadeCreate,
  AtividadeUpdate,
  Update,
} from './../../atividade';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, delay } from 'rxjs';
import { Atividade } from '../../atividade';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private readonly API = 'http://localhost:3001/todolist/';
  private readonly API2 = 'http://localhost:3001/todolist/atividades';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Atividade[]>(this.API).pipe();
  }

  listarConclusao() {
    return this.http.get<Atividade[]>(this.API2).pipe();
  }

  listarId(id: number) {
    return this.http.get<Atividade>(`${this.API}${id}`).pipe(take(1));
  }

  create(atividade: AtividadeCreate) {
    return this.http.post<Atividade>(this.API, atividade).pipe(take(1));
  }

  update(id: number, atividade: AtividadeUpdate) {
    return this.http
      .put<Atividade>(`http://localhost:3001/ToDoList/${id}`, atividade)
      .pipe(take(1));
  }

  update2(id: number, atividade: Update) {
    return this.http
      .put<Update>(`http://localhost:3001/ToDoList/${id}`, atividade)
      .pipe(take(1));
  }

  remove(id: number) {
    return this.http
      .delete<Atividade[]>(`http://localhost:3001/ToDoList/${id}`)
      .pipe(take(1));
  }
}
