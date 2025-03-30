import React from 'react';
import { Tarefa } from '../types';
import TarefaItem from './TarefaItem';

interface TarefaListProps {
    tarefas: Tarefa[];
    onDelete: (id: number) => void;
    onEdit: (tarefa: Tarefa) => void;
    onToggleConcluida: (id: number, concluida: boolean) => void;
    isLoading?: boolean;
}

const TarefaList: React.FC<TarefaListProps> = ({
    tarefas,
    onDelete,
    onEdit,
    onToggleConcluida,
    isLoading = false
}) => {
    if (tarefas.length === 0) {
        return <p>Sem tarefa</p>;
    }

    return (
        <ul>
        {tarefas.map((tarefa) => (
            <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleConcluida={onToggleConcluida}
            isLoading={isLoading}
            />
        ))}
        </ul>
    );
};

export default TarefaList;
