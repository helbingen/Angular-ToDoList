import { AlertModalService } from './../shared/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Atividade } from '../../atividade';
import { TodolistService } from '../shared/todolist.service';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-listar-atividades',
  templateUrl: './listar-atividades.component.html',
  styleUrls: ['./listar-atividades.component.css'],
})
export class ListarAtividadesComponent implements OnInit {
  bsModalRef!: BsModalRef;
  atividades$!: Observable<Atividade[]>;
  atividade: Object = {};
  atividadeSelecionada!: Atividade;

  constructor(
    private service: TodolistService,
    private alertService: AlertModalService,
    // private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.handleError()
    this.atividades$ = this.service.listar();
  }

  onDelete(id: number) {
    this.atividades$ = this.service.remove(id);
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
    // let dataatual = Date.now();
    // let datacorrente = new Date(dataatual);
    // console.log(datacorrente);
    let body = { dataConclusao: new Date(0), concluido: true };
    this.atividade = this.service.update(id, body).subscribe();
  }
}
