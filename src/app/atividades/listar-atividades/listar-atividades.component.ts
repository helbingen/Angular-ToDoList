import { AlertModalService } from './../shared/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Atividade } from '../../atividade';
import { TodolistService } from '../shared/todolist.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listar-atividades',
  templateUrl: './listar-atividades.component.html',
  styleUrls: ['./listar-atividades.component.css'],
})
export class ListarAtividadesComponent implements OnInit {
  deleteModalRef!: BsModalRef;
  atividades$!: Observable<Atividade[]>;
  atividade: Object = {};
  atividadeSelecionada!: Atividade;

  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: TodolistService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.atividades$ = this.service.listarConclusao();
  }

  onDelete(atividade: Atividade) {
    this.atividadeSelecionada = atividade;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  onConfirmDelete() {
    this.service.remove(this.atividadeSelecionada.id).subscribe(
      (sucess) => {
        this.deleteModalRef.hide();
        window.location.reload();
      },
      (error) => {
        this.alertService.showAlertDanger(
          'Erro ao excluir atividade. Tente novamente mais tarde.'
        );
        this.deleteModalRef.hide();
      }
    );
  }
  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  onUpdate(id: number) {
    this.router.navigate(['edit', id]), { relativeTo: this.route };
  }

  handleError() {
    this.alertService.showAlertDanger(
      'Erro ao carregar atividades. Tente novamente mais tarde.'
    );
  }

  onConcluir(id: number) {
    let dataatual = Date.now();
    let body = { dataConclusao: new Date(dataatual), concluido: true };
    this.atividade = this.service.update(id, body).subscribe();
  }

  onAbrir(id: number) {
    let body = { dataConclusao: null, concluido: false };
    this.atividade = this.service.update(id, body).subscribe();
  }
}
