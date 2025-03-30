export interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

export type NovaTarefa = Omit<Tarefa, 'id'>;
