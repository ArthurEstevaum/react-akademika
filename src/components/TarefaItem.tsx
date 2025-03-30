import React from 'react';
import { Tarefa } from '../types';

interface TarefaItemProps {
    tarefa: Tarefa;
    onDelete: (id: number) => void;
    onEdit: (tarefa: Tarefa) => void;
    onToggleConcluida: (id: number, concluida: boolean) => void;
    isLoading?: boolean;
}

const TarefaItem: React.FC<TarefaItemProps> = ({
    tarefa,
    onDelete,
    onEdit,
    onToggleConcluida,
    isLoading = false
}) => {
    const handleToggle = () => {
        onToggleConcluida(tarefa.id, !tarefa.concluida);
    };

    return (
        <li style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none', opacity: isLoading ? 0.5 : 1 }}>
        <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={handleToggle}
        disabled={isLoading}
        style={{ marginRight: '10px' }}
        />
        {tarefa.titulo}
        <button onClick={() => onEdit(tarefa)} disabled={isLoading} style={{ marginLeft: '10px' }}>
        Editar
        </button>
        <button onClick={() => onDelete(tarefa.id)} disabled={isLoading} style={{ marginLeft: '5px' }}>
        Excluir
        </button>
        </li>
    );
};

export default TarefaItem;
