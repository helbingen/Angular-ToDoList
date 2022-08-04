export interface Atividade {
  id: number;
  descricao: string;
  concluido: boolean;
  dataConclusao: Date;
}

export interface AtividadeCreate {
  descricao: string;
  concluido: boolean;
  dataConclusao: Date;
}

export interface AtividadeUpdate {
  // descricao: string;
  concluido: boolean;
  dataConclusao: Date;
}
